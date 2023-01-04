import React from "react";
import "./TopBar.css";

import assets from "../../../assets";

// components
import SearchInput from "../../SearchInput/SearchInput";

const TopBar = ({ displayMenu, setDisplayMenu }) => {
  return (
    <div className="topbarContainer">
      <button
        className="menuButton"
        onClick={() => setDisplayMenu(!displayMenu)}
      >
        {displayMenu ? (
          <img src={assets.cross} alt="close" />
        ) : (
          <img src={assets.hamburger} alt="open" />
        )}
      </button>

      <div className="topbarRightContainer">
        <SearchInput />

        <div className="userInfoContainer">
          <h4>Mithilesh Gajbhiye</h4>
          <p>Web Developer</p>
        </div>

        <div className="userProfileImage">
          <img src={assets.user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
