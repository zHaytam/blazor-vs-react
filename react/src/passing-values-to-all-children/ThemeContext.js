import React from 'react';

const ThemeContext = React.createContext({
    theme: 'light', // current theme (default is light)
    setTheme: () => {}, // function to change the theme (empty for now)
});
export default ThemeContext;
