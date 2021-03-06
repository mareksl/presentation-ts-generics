import React from "react";
import Editor from "../../../components/Editor";
import Section from "../../../components/Section";
import files from "../../examples";

const Functions4: React.FC = () => {
  return (
    <>
      <Section>
        <Editor file={files.example7} hasPreview />
      </Section>
    </>
  );
};

export default Functions4;
