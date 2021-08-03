import React from "react";
import Editor from "../../../components/Editor";
import Section from "../../../components/Section";
import files from "../../examples";

const Functions2: React.FC = () => {
  return (
    <>
      <Section>
        <Editor file={files.example3} hasPreview />
      </Section>
      <Section>
        <Editor file={files.example4} hasPreview />
      </Section>
    </>
  );
};

export default Functions2;
