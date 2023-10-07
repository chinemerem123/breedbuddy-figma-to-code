import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[30px]" };
const variants = {
  fill: {
    gray_900_01: "bg-gray-900_01 text-white-A700",
    white_A700: "bg-white-A700",
  },
};
const sizes = { xs: "p-[13px]", sm: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_900_01", "white_A700"]),
};

export { Button };
