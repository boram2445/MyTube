import React from "react";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import styles from "./navbar.module.css";

function Navbar({ inputRef, getSearchVideo }) {
  function onKeyPress(e) {
    if (e.key === "Enter") {
      getSearchVideo(e);
    }
  }
  return (
    <nav className={styles["nav-container"]}>
      <h1 className={styles["logo"]}>
        <img src={logo} alt="My Tube" className={styles["logo-icon"]} />
        <span className={styles["logo-text"]}>MyTube</span>
      </h1>
      <form className={styles["input-form"]}>
        <input
          ref={inputRef}
          type="text"
          className={styles["input"]}
          placeholder="검색"
          onKeyPress={onKeyPress}
        />
        <button
          className={styles["input-btn"]}
          onClick={(e) => getSearchVideo(e)}
        >
          <img src={searchIcon} alt="찾기" />
        </button>
      </form>
    </nav>
  );
}
export default Navbar;
