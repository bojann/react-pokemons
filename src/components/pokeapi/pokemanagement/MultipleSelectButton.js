import React from "react";
import PropTypes from "prop-types";

import "./MultipleSelectButton.scss";

const MultipleSelectButton = props => {
  return (
    <div className="poke-checkbox">
      <input
        id="multipoke"
        type="checkbox"
        onChange={props.handleChangeCheckbox}
      />
      <label htmlFor="multipoke">Select multiple pokemons</label>
    </div>
  );
};

MultipleSelectButton.propTypes = {
  handleChangeCheckbox: PropTypes.func
};

export default MultipleSelectButton;
