import React, { useState } from "react";
import Menu from "./Menu";

function Header({ darkMode, changeDarkMode }) {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu darkMode={darkMode} changeDarkMode={changeDarkMode} />
      </div>
    </div>
  );
}

export default Header;
