import React, { useRef } from "react";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import styles from "./navbar.module.css";

function Navbar({ onSearch }) {
  const inputRef = useRef();
  function onClickBtn() {
    const inputValue = inputRef.current.value;
    onSearch(inputValue);
  }

  function onKeyPress(e) {
    if (e.key === "Enter") {
      const inputValue = inputRef.current.value;
      onSearch(inputValue);
    }
  }
  return (
    <nav className={styles["nav-container"]}>
      <h1 className={styles["logo"]}>
        <img src={logo} alt="My Tube" className={styles["logo-icon"]} />
        <span className={styles["logo-text"]}>MyTube</span>
      </h1>
      <div className={styles["input-form"]}>
        <input
          ref={inputRef}
          type="text"
          className={styles["input"]}
          placeholder="검색"
          onKeyPress={onKeyPress}
        />
        <button className={styles["input-btn"]} onClick={onClickBtn}>
          <img src={searchIcon} alt="찾기" />
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
