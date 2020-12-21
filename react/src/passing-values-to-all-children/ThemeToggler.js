import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeToggler = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div
            style={{ cursor: 'pointer' }}
            title="switch theme"
            onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
            }}
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </div>
    );
};

export default ThemeToggler;
