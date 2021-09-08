import { useState } from "react";

const Button = ({ disabled }) => {
  const [bgColor, setBgColor] = useState("red");
  const newBtnColor = bgColor === "red" ? "blue" : "red";
  return (
    <button
      style={{ backgroundColor: disabled ? "gray" : bgColor }}
      disabled={disabled}
      onClick={() => setBgColor(newBtnColor)}
    >
      Change to {newBtnColor}
    </button>
  );
};

export default Button;
