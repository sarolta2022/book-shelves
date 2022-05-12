//theme data
//user data
//location

//Create a contect
//take a provider and wrap around th component tree
// pass the data
// read the data that you passed

import React, { Component, createContext } from "react";

export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
  state = {
    isDarkMode: true,
    dark: {
      bg: "#222222",
      color: "rgba(239,83,80,1",
      hover: "rgba(239,83,80, 0.8)",
    },
    light: { bg: "#ecf0f1", color: "#222222", hover: "rgba(255,193,0, 0.8)" },
  };

  changeTheme = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, changeTheme: this.changeTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
