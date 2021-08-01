import React from "react";
import classes from "./Section.module.scss";

interface Props {
  id?: string;
}

const Section: React.FC<Props> = ({ children, id }) => {
  return (
    <section id={id} className={classes.content}>
      {children}
    </section>
  );
};

export default Section;
