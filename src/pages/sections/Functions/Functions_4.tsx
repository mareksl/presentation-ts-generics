import React from "react";
import Editor from "../../../components/Editor";
import Section from "../../../components/Section";

import example7 from "../../examples/Functions_7.example";

const Functions4: React.FC = () => {
  return (
    <>
      <Section>
        <Editor value={example7} />
      </Section>
    </>
  );
};

export default Functions4;
