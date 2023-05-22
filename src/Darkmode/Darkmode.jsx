import React, { useState } from 'react';
import './style.scss';

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeToggle() {
    setIsDarkMode(!isDarkMode);
    
    const body = document.querySelector('body');
    body.classList.toggle('Darkmode');
  }

  return (
    
    <div className={isDarkMode ? "Darkmode" : "wrapper"}>
      <input 
      type="checkbox" 
      name="checkbox" 
      className="switch" 
      onChange={handleDarkModeToggle} 
      checked={isDarkMode} />
    </div>

  );
}

export default DarkModeButton;
