import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1>Shopping List</h1>
      <button onClick={onDarkModeClick}>{buttonText}</button>
    </header>
  );
}

export default Header;
