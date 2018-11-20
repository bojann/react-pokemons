import React from "react";
import PropTypes from "prop-types";

import PokeMultipleSelect from "components/pokeapi/pokemanagement/PokeMultipleSelect";
import PokeCompare from "components/pokeapi/pokemanagement/PokeCompare";

import "./PokeToolbar.scss";

const PokeToolbar = props => {
  return (
    <div className="poke-toolbar">
      <PokeMultipleSelect
        handleChangeCheckbox={props.handleChangeCheckbox}
        getItemStatus={props.getItemStatus}
        handleClickBtnCompare={props.handleClickBtnCompare}
      />
      <PokeCompare
        selectedItems={props.selectedItems}
        handleClickBtnCompare={props.handleClickBtnCompare}
        selectMultiplePokemonFlag={props.selectMultiplePokemonFlag}
      />
    </div>
  );
};

PokeToolbar.propTypes = {
  handleChangeCheckbox: PropTypes.func,
  selectedItems: PropTypes.array,
  handleClickBtnCompare: PropTypes.func,
  selectMultiplePokemonFlag: PropTypes.bool
};

export default PokeToolbar;
