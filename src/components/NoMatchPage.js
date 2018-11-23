import React from "react";
import { navigate } from "@reach/router";

const NoMatch = () => {
  const redirectUser = () => {
    navigate("/pokemons");
  };

  const spanStyle = {
    color: "#c15c82",
    fontStyle: "italic",
    textDecoration: "underline",
    cursor: "pointer"
  };

  return (
    <>
      <h2>Hi, if you see this message it means that you have wrong URL</h2>
      <p>
        Don't worry just click next link and it will be all over
        <span style={spanStyle} onClick={redirectUser}>
          {" "}
          I am the link to click
        </span>
      </p>
    </>
  );
};

export default NoMatch;
