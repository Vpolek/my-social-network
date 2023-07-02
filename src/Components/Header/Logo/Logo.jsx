import React from "react";
import s from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <img
        className={s.logo}
        src="https://cdn.cdnlogo.com/logos/r/63/react.svg"
      />
      <p className={s.text}>VReacte</p>
    </div>
  );
};

export default Logo;
