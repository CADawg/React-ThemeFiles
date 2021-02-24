export default {
  light: {
    name: "Light",
    author: "CADawg",
    licence: {name: "MIT", url: "https://github.com/Snaddyvitch-Dispenser/React-ThemeFiles/blob/master/LICENSE"},
    year: 2021,
    isDarkish: false,
    codeName: "light",
    muiTheme: {palette: {type: "light"}}, // Material UI Theme
  },
  dark: {
    name: "Dark",
    author: "CADawg",
    licence: {name: "MIT", url: "https://github.com/Snaddyvitch-Dispenser/React-ThemeFiles/blob/master/LICENSE"}, // Licence
    year: 2021, // Copyright Year
    isDarkish: true, // Explains whether a theme is more dark or light. Used if no muiTheme is specified
    codeName: "dark", // Code name - a unique name representing it - also used in css
    muiTheme: {palette: {type: "dark"}}, // Material UI Theme
  }
};
