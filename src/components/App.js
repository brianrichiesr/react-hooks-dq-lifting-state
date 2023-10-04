import React, { useState } from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <DarkModeWrapper darkMode={isDarkMode}>
      <Header darkMode={isDarkMode} changeDarkMode={changeDarkMode} />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
