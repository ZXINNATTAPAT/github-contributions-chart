import React from "react";
import PropTypes from "prop-types";
import { themes } from "github-contributions-canvas";

const availableThemes = {
  standard: "GitHub",
  classic: "GitHub Classic",
  githubDark: "GitHub Dark",
  halloween: "Halloween",
  teal: "Teal",
  leftPad: "@left_pad",
  dracula: "Dracula",
  blue: "Blue",
  panda: "Panda 🐼",
  sunny: "Sunny",
  pink: "Pink",
  YlGnBu: "YlGnBu",
  solarizedDark: 'Solarized Dark',
  solarizedLight: 'Solarized Light'
};

const Preview = ({ themeName }) => (
  <div
    className="Theme-preview"
    style={{ backgroundColor: themes[themeName].background }}
  >
    <span style={{ backgroundColor: themes[themeName].grade1 }}></span>
    <span style={{ backgroundColor: themes[themeName].grade2 }}></span>
    <span style={{ backgroundColor: themes[themeName].grade3 }}></span>
    <span style={{ backgroundColor: themes[themeName].grade4 }}></span>
  </div>
);

const ThemeSelector = ({ currentTheme, onChangeTheme }) => (
  <div>
    
  </div>
);

ThemeSelector.propTypes = {
  onChangeTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired
};

export default ThemeSelector;
