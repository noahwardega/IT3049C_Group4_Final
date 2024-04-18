import React from 'react';

const DarkModeToggle = () => {
    const toggleDarkMode = () => {
        document.body.classList.toggle('light-mode');
    };

    return (
        <span id="mode-toggle" onClick={toggleDarkMode}>
            🌞/🌙
        </span>
    );
};

export default DarkModeToggle;