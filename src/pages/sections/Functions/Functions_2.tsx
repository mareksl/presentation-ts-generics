import React from "react";
import Editor from "../../../components/Editor";
import Section from "../../../components/Section";

import example3 from "../../examples/Functions_3.example";
import example4 from "../../examples/Functions_4.example";

const Functions2: React.FC = () => {
  return (
    <>
      <Section>
        <Editor value={example3} />
      </Section>
      <Section>
        <Editor value={example4} />
      </Section>
    </>
  );
};

export default Functions2;
