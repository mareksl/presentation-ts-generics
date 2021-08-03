import React from "react";
import Editor from "../../../components/Editor";
import Section from "../../../components/Section";
import files from "../../examples";

const Functions: React.FC = () => {
  return (
    <>
      <Section>
        <h2>Funkcje</h2>
      </Section>
      <Section>
        <Editor file={files.example1} hasPreview />
      </Section>
      <Section>
        <Editor file={files.example2} hasPreview />
      </Section>
    </>
  );
};

export default Functions;
