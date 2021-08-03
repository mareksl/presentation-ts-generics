import React from "react";
import Section from "../../../components/Section";
import Editor from "../../../components/Editor";
import files from "../../examples";

const Types3: React.FC = () => {
  return (
    <>
      <Section>
        <Editor file={files.types5} hasPreview />
      </Section>
      <Section>
        <Editor file={files.types6} hasPreview />
      </Section>
    </>
  );
};

export default Types3;
