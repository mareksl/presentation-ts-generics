import React, { useEffect, useState } from "react";
import MonacoEditor, { useMonaco } from "@monaco-editor/react";
import classes from "./Editor.module.scss";
import theme from "./theme.json";
import { File } from "../pages/examples";
import { languages } from "monaco-editor";
const files = require.context("!!raw-loader!@types/react", true, /\.d.ts$/);

interface Props {
  file: File;
  hasPreview?: boolean;
}

const Editor: React.FC<Props> = ({ file, hasPreview }) => {
  const monaco = useMonaco();

  const [themeLoaded, setThemeLoaded] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

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

  const onEditorChange = async () => {
    if (monaco) {
      const output = await getTranspiledCode();
      if (output) {
        try {
          const logOld = console.log;
          console.log = (...el) => {
            setConsoleOutput([
              ...consoleOutput,
              ...el.map((msg) => JSON.stringify(msg, null, "\t")),
            ]);
            logOld(...el);
          };

          const code = output.outputFiles[0].text;
          // eslint-disable-next-line no-new-func
          new Function('var exports = {"__esModule": true};' + code)();

          console.log = logOld;
        } catch (e) {
          console.error(e);
        }
      }
    }
  };

  const onClear = () => {
    setConsoleOutput([]);
  };

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("onedark", theme as any);
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        module: languages.typescript.ModuleKind.CommonJS,
        target: languages.typescript.ScriptTarget.ES2017,
        jsx: languages.typescript.JsxEmit.React,
        esModuleInterop: true,
        jsxFactory: "React.createElement",
        reactNamespace: "React",
      });

      files.keys().forEach((key) => {
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          files(key).default,
          "file:///node_modules/@types/react/" + key.substr(2)
        );
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
          <div className={classes.outputButtons}>
            <button className={classes.run} onClick={onEditorChange}>
              Run
            </button>
            <button className={classes.run} onClick={onClear}>
              Clear
            </button>
          </div>
          <pre className={classes.outputWrapper}>
            <code className={classes.outputContent}>
              {consoleOutput
                .flatMap((l) => l.split("\n"))
                .map((line) => (
                  <span className={classes.outputLine}>{line}</span>
                ))}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default Editor;
