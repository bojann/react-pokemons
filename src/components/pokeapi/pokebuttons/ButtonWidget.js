import React, { Component } from "react";
import CustomButton from "components/shared/buttons/CustomButton";

class ButtonWidget extends Component {
  state = {
    btnName: "Add Item",
    bsStyle: "primary",
    bsSize: "small",
    isVisible: false
  };

  componentDidMount() {
    this.btnStyle = {
      add: "add-button",
      remove: "remove-button",
      change: "change-button"
    };
  }

  handleClickAddBtn = () => {};

  render() {
    return (
      <div className="poke-btn-widget">
        <CustomButton
          {...this.state}
          className={this.btnStyle.add}
          handleClickEvent={this.handleClickAddBtn}
        >
          Add Item
        </CustomButton>
        <CustomButton {...this.state} handleClickEvent={this.handleClickAddBtn}>
          Remove Item
        </CustomButton>
        <CustomButton {...this.state} handleClickEvent={this.handleClickAddBtn}>
          Change Item
        </CustomButton>
      </div>
    );
  }
}

export default ButtonWidget;
