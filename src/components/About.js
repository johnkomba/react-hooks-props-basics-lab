import React from "react";
import Links from "./Links";

function About(props) {
  const { bio, links } = props;

  return (
    <div id="about">
      {bio && <p>{bio}</p>}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
