import React from "react";
import s from "./Header.module.css";
import Logo from "./Logo/Logo";
import Social from "./Social/Social";

const Header = () => {
  return (
    <div>
      <header className={s.header}>
        <Logo />
        <Social />
      </header>
    </div>
  );
};

export default Header;
