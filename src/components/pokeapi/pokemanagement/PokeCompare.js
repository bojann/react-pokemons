import React from "react";
import PropTypes from "prop-types";

import CustomButton from "components/pokeapi/pokebuttons/CustomButton";

import "./PokeCompare.scss";

const PokeCompare = props => {
  const itemStatusLength = props.selectedItems.length;
  const isDisabled = props.selectMultiplePokemonFlag ? false : true;
  
  return props.selectMultiplePokemonFlag ? (
    <div className="poke-toolbar-features">
      <div className="poke-toolbar-features__item-info">
        <span>{itemStatusLength ? `*Selected items ${itemStatusLength}/5` : `*Selected items 0/5`}</span>
      </div>
      <div className="poke-toolbar-features__compare-btn">
        <CustomButton
          handleClickEvent={props.handleClickBtnCompare}
          isDisabled={isDisabled}
        >
          Compare selected
        </CustomButton>
      </div>
    </div>
  ) : null;
};

PokeCompare.propTypes = {
  selectedItems: PropTypes.array,
  handleClickBtnCompare: PropTypes.func,
  selectMultiplePokemonFlag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};

export default PokeCompare;
