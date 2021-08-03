import React, { useEffect } from "react";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import "./Root.scss";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/blood.css";
import Section from "../components/Section";

import Title from "./sections/Title";
import Functions from "./sections/Functions/Functions";
import Functions2 from "./sections/Functions/Functions_2";
import Functions3 from "./sections/Functions/Functions_3";
import Functions4 from "./sections/Functions/Functions_4";
import Types from "./sections/Types/Types";
import Types2 from "./sections/Types/Types_2";
import React1 from "./sections/React/React_1";
import Types3 from "./sections/Types/Types_3";

const Root: React.FC = () => {
  useEffect(() => {
    Reveal.initialize({
      plugins: [Markdown],
      disableLayout: true,
      hash: true,
    });
  }, []);

  const sections = [
    Title,
    Functions,
    Functions2,
    Functions3,
    Functions4,
    Types,
    Types2,
    Types3,
    React1,
  ];

  return (
    <div className="wrapper">
      <div className="reveal">
        <div className="slides">
          {sections.map((Content, i) => (
            <Section key={i.toString()}>
              <Content />
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Root;
