import React, { Component } from "react";
import CustomButton from "components/pokeapi/pokebuttons/CustomButton";

class RemoveItemButton extends Component {
  state = {
    className: "remove-button",
    bsStyle: "danger",
    bsSize: "small",
    isDisabled: ""
  };

  handleClickBtnRemove = ev => {
    console.log("%c  BA :********* ", "background: orange;", ev.target);
  };

  render() {
    const dataIdName = this.props["data-idname"];
    return (
      <CustomButton
        {...this.state}
        data-idname={dataIdName}
        handleClickEvent={this.handleClickBtnRemove}
      >
        Remove Poke
      </CustomButton>
    );
  }
}

export default RemoveItemButton;
