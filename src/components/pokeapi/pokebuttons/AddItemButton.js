import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import CustomButton from "components/shared/buttons/CustomButton";

class ButtonAddItem extends PureComponent {
  state = {
    className: "add-button",
    bsStyle: "primary",
    bsSize: "small"
  };

  render() {
    const dataIdName = this.props["data-idname"];
    const isDisabled = this.props.selectMultiplePokemonFlag ? false : true;
    const handleClickEvent = this.props.handleClickAddPokemon;

    return (
      <CustomButton
        {...this.state}
        isDisabled={isDisabled}
        data-idname={dataIdName}
        handleClickEvent={handleClickEvent}
      >
        Add Poke
      </CustomButton>
    );
  }
}

ButtonAddItem.propTypes = {
  selectMultiplePokemonFlag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  "data-idname": PropTypes.string
};

export default ButtonAddItem;
