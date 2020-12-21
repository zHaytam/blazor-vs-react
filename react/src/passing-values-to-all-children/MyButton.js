import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const styles = {
    light: {
        border: '1px solid black',
        background: 'white',
        color: 'black',
    },
    dark: {
        background: 'black',
        color: 'white',
    },
};

function MyButton(props) {
    const { theme } = useContext(ThemeContext);
    return (
        <button type="button" style={styles[theme]}>
            {props.text}
        </button>
    );
}

export default MyButton;
