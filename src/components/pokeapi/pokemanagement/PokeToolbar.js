import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import MultipleSelectButton from "components/pokeapi/pokemanagement/MultipleSelectButton";
import CompareButton from "components/pokeapi/pokemanagement/CompareButton";

import "./PokeToolbar.scss";

class PokeToolbar extends PureComponent {
  render() {
    return (
      <div className="poke-toolbar">
        <MultipleSelectButton
          handleChangeCheckbox={this.props.handleChangeCheckbox}
          getItemStatus={this.props.getItemStatus}
          handleClickBtnCompare={this.props.handleClickBtnCompare}
        />
        <CompareButton
          selectedItems={this.props.selectedItems}
          handleClickBtnCompare={this.props.handleClickBtnCompare}
          selectMultiplePokemonFlag={this.props.selectMultiplePokemonFlag}
        />
      </div>
    );
  }
}

PokeToolbar.propTypes = {
  handleChangeCheckbox: PropTypes.func,
  selectedItems: PropTypes.array,
  handleClickBtnCompare: PropTypes.func,
  selectMultiplePokemonFlag: PropTypes.bool
};

export default PokeToolbar;
