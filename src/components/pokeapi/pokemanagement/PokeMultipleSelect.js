import React from "react";
import PropTypes from "prop-types";

import "./PokeMultipleSelect.scss";

const PokeMultipleSelect = props => {
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

PokeMultipleSelect.propTypes = {
  handleChangeCheckbox: PropTypes.func
};

export default PokeMultipleSelect;
