import React, { useEffect, useState, useRef } from "react";
import MonacoEditor, { useMonaco } from "@monaco-editor/react";
import classes from "./Editor.module.scss";
import theme from "./theme.json";
import { File } from "../pages/examples";
import { languages } from "monaco-editor";

interface Props {
  file: File;
  hasPreview?: boolean;
}

const Editor: React.FC<Props> = ({ file, hasPreview }) => {
  const monaco = useMonaco();

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [themeLoaded, setThemeLoaded] = useState(false);

  // const [iframeCode, setIframeCode] = useState("");

  const getTranspiledCode = async () => {
    if (monaco) {
      const worker = await monaco.languages.typescript.getTypeScriptWorker();
      const model = monaco.editor
        .getModels()
        .find((model) => model.uri.path.match(`/${file.name}`));
      if (model) {
        const proxy = await worker(model.uri);
        return await proxy.getEmitOutput(model.uri.toString());
      }
    }
  };

  //   const iframeContent = `
  // <!DOCTYPE html>
  // <html lang="en">
  // <head>
  //     <meta charset="UTF-8">
  //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <title>Document</title>
  // </head>
  // <body>
  // </body>
  // <script>var exports = {"__esModule": true};</script>
  // <script>${iframeCode}</script>
  // </html>
  // `;

  const onEditorChange = async () => {
    if (monaco) {
      const output = await getTranspiledCode();
      if (output) {
        // setIframeCode(output.outputFiles[0].text);
        try {
          const code = output.outputFiles[0].text;
          // eslint-disable-next-line no-new-func
          new Function('var exports = {"__esModule": true};' + code)();
        } catch (e) {
          console.error(e);
        }
        iframeRef.current?.contentWindow?.location.reload();
      }
    }
  };

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("onedark", theme as any);
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        module: languages.typescript.ModuleKind.CommonJS,
        target: languages.typescript.ScriptTarget.ES2017,
        jsx: languages.typescript.JsxEmit.ReactJSX,
      });
      setThemeLoaded(true);
    }
  }, [monaco]);

  return (
    <div className={classes.container}>
      {themeLoaded && (
        <MonacoEditor
          theme="onedark"
          className={classes.editor}
          language={file.language || "typescript"}
          defaultValue={file.value}
          options={{
            fontSize: 24,
            fontLigatures: true,
            fontFamily: "Fira Code",
          }}
          path={file.name}
          keepCurrentModel={true}
        />
      )}
      {hasPreview && themeLoaded && (
        <div className={classes.output}>
          <div>
            <button className={classes.run} onClick={onEditorChange}>
              Run
            </button>
          </div>
          <iframe
            title="iframe"
            className={classes.iframe}
            srcDoc={""}
            ref={iframeRef}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Editor;
