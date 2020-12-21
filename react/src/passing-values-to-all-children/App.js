import MyButton from './MyButton';
import ThemeContext from './ThemeContext';
import React, { useState } from 'react';
import ThemeToggler from './ThemeToggler';

function App() {
    const [theme, setTheme] = useState('light');
    const value = { theme, setTheme };
    return (
        <ThemeContext.Provider value={value}>
            <div>
                <MyButton text="Click me!"></MyButton>
                <br></br>
                <ThemeToggler></ThemeToggler>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
