import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  const ThemeContext = React.useContext(ThemeContext);

  return (
    <div>
      <button style={buttonThemes.black}>Press me</button>
    </div>
  );
}

export default HeaderButton;
