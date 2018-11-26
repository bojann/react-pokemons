import React, { Component } from "react";

import CustomButton from "components/shared/buttons/CustomButton";

class RemoveItemButton extends Component {
  state = {
    className: "remove-button",
    bsStyle: "danger",
    bsSize: "small",
    isDisabled: false
  };
  
  render() {
    const dataIdName = this.props["data-idname"];
    const { handleClickRemovePokemon } = this.props;
    return (
      <CustomButton
        {...this.state}
        data-idname={dataIdName}
        handleClickEvent={handleClickRemovePokemon}
      >
        Remove Poke
      </CustomButton>
    );
  }
}

export default RemoveItemButton;
