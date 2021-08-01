import React, { useEffect } from "react";
import Reveal from "reveal.js";
import "./Root.scss";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import Title from "./sections/Title";

import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

const Root: React.FC = () => {
  useEffect(() => {
    Reveal.initialize({
      plugins: [Markdown],
    });
  }, []);

  const sections = [Title];

  return (
    <div className="wrapper">
      <div className="reveal">
        <div className="slides">
          {sections.map((Section, i)=> 
              <section key={i.toString()}>
                  <Section/>
              </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Root;
