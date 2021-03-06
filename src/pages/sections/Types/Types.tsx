import React from "react";
import Section from "../../../components/Section";
import Editor from "../../../components/Editor";
import files from "../../examples";

const Types: React.FC = () => {
  return (
    <>
      <Section>
        <h2>Typy i interfejsy</h2>
      </Section>
      <Section>
        <Editor file={files.types1} hasPreview />
      </Section>
      <Section>
        <Editor file={files.types2} hasPreview />
      </Section>
    </>
  );
};

export default Types;
