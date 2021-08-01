import React from "react";
import Editor from "../../../components/Editor";
import Section from "../../../components/Section";

import example1 from "../../examples/Functions_1.example";
import example2 from "../../examples/Functions_2.example";

const Functions: React.FC = () => {
  return (
    <>
      <Section>
        <h2>Funkcje</h2>
      </Section>
      <Section>
        <Editor value={example1} />
      </Section>
      <Section>
        <Editor value={example2} />
      </Section>
    </>
  );
};

export default Functions;
