import React from "react";
import "./button.css";

interface IButton {
  label: string | React.ReactElement;
  onClick?: () => void;
  variant?: "solid" | "outline";
  styles?: React.CSSProperties;
  disabled?: boolean;
  isSelected?: boolean; // Nueva prop
}

const CustomButton = (props: IButton) => {
  const {
    onClick,
    label,
    variant = "solid",
    disabled,
    styles,
    isSelected,
  } = props;
  return (
    <button
      onClick={onClick}
      style={{ ...styles, backgroundColor: disabled ? "#CDCDCD" : "" }}
      disabled={disabled}
      className={
        // variant === "solid" ? "buttonLogInSolid" : "buttonLogInOutlined"
        variant === "solid"
          ? isSelected
            ? "buttonLogInSolidSelected"
            : "buttonLogInSolid"
          : "buttonLogInOutlined"
      }
    >
      {label}
    </button>
  );
};

export default CustomButton;
