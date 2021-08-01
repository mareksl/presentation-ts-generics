import React, { useEffect, useState } from "react";
import MonacoEditor, { useMonaco } from "@monaco-editor/react";
import classes from "./Editor.module.scss";
import theme from "./theme.json";

interface Props {
  value: string;
}

const Editor: React.FC<Props> = ({ value }) => {
  const monaco = useMonaco();
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("onedark", theme as any);
      setThemeLoaded(true);
    }
  }, [monaco]);

  return (
    <div className={classes.container}>
      {themeLoaded && (
        <MonacoEditor
          theme="onedark"
          className={classes.editor}
          language="typescript"
          value={value}
          options={{
            fontSize: 24,
            fontLigatures: true,
            fontFamily: "Fira Code",
          }}
        />
      )}
    </div>
  );
};

export default Editor;
