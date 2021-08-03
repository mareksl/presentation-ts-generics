import React from "react";
import Section from "../../../components/Section";
import Editor from "../../../components/Editor";
import files from "../../examples";

const Types2: React.FC = () => {
  return (
    <>
      <Section>
        <Editor file={files.types3} hasPreview />
      </Section>
      <Section>
        <Editor file={files.types4} hasPreview />
      </Section>
    </>
  );
};

export default Types2;
