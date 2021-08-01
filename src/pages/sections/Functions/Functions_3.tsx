import React from "react";
import Editor from "../../../components/Editor";
import Section from "../../../components/Section";

import example5 from "../../examples/Functions_5.example";
import example6 from "../../examples/Functions_6.example";

const Functions3: React.FC = () => {
  return (
    <>
      <Section>
        <Editor value={example5} />
      </Section>
      <Section>
        <Editor value={example6} />
      </Section>
    </>
  );
};

export default Functions3;
