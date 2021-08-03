import React from "react";
import Editor from "../../../components/Editor";
import Section from "../../../components/Section";
import files from "../../examples";

const React1: React.FC = () => {
  return (
    <>
      <Section>
        <Editor file={files.react1} hasPreview />
      </Section>
    </>
  );
};

export default React1;
