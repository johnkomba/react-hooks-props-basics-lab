import React from "react";

function Links(props) {
  const { github, linkedin } = props;

  return (
    <div>
      <h3>Links</h3>
      <a href={github}>GitHub</a>
      <a href={linkedin}>LinkedIn</a>
    </div>
  );
}

export default Links;
