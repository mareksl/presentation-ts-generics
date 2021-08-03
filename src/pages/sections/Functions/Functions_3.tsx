import React from "react";
import Editor from "../../../components/Editor";
import Section from "../../../components/Section";
import files from "../../examples";

const Functions3: React.FC = () => {
  return (
    <>
      <Section>
        <Editor file={files.example5} hasPreview />
      </Section>
      <Section>
        <Editor file={files.example6} hasPreview />
      </Section>
    </>
  );
};

export default Functions3;
