import React, { useState } from "react";
import Editor from "../../../components/Editor";
import GenericSelect from "../../../components/GenericSelect";
import Section from "../../../components/Section";
import Select from "../../../components/Select";
import files from "../../examples";

const React1: React.FC = () => {
  const [value, setValue] = useState("orange");
  const [num, setNum] = useState(1);
  return (
    <>
      <Section>
        <Editor file={files.react1} />
      </Section>
      <Section>
        <Select
          setValue={setValue}
          value={value}
          options={["orange", "green", "red"]}
        />

        <span>{value}</span>
      </Section>
      <Section>
        <Editor file={files.react2} />
      </Section>
      <Section>
        <GenericSelect
          value={value}
          setValue={setValue}
          options={["orange", "green", "red"]}
        />

        <span>{value}</span>

        <GenericSelect
          value={num}
          setValue={(v) => {
            console.log(v, typeof v);
            setNum(v);
          }}
          options={[1, 2, 3]}
        />

        <span>{num}</span>
      </Section>
    </>
  );
};

export default React1;
