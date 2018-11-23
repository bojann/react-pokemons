import React from "react";
import { Button } from "react-bootstrap";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./CustomButton.scss";

const CustomButton = props => {
  const BASE_CLASS = "poke-button";
  const {
    btnName,
    className,
    handleClickEvent,
    bsStyle,
    isDisabled = true,
    isVisible = true,
    ...rest
  } = props;
  const classNamesArr = className ? className.split(" ") : [];
  const classConcat = classNamesArr.map(name => `${BASE_CLASS}--${name}`);

  const itemStyleClasses = classNames(
    BASE_CLASS,
    isVisible ? `${BASE_CLASS}--visible` : `${BASE_CLASS}--hidden`,
    classConcat
  );

  return (
    <Button
      className={itemStyleClasses}
      bsStyle={bsStyle}
      onClick={handleClickEvent}
      disabled={isDisabled}
      {...rest}
    >
      {btnName ? btnName : props.children}
    </Button>
  );
};

CustomButton.propTypes = {
  bsSize: PropTypes.string,
  bsStyle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  "data-idname": PropTypes.string,
  handleClickEvent: PropTypes.func,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export default CustomButton;
