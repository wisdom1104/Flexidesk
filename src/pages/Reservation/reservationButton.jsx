import React, { useContext } from 'react';
import { ThemeContext } from '../utils/context';
import Button, { btnStyle } from './Button';

function DarkMode() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <Button
        style={btnStyle.blueBtn}
        width={80}
        height={40}
        onClick={toggleTheme}
      >
        {isDark ? '화이트' : '다크'}
      </Button>
    </>
  );
}

export const darkMode = isDark => {
  let color = '';
  if (isDark) {
    color = darkModeColor.dark;
  } else {
    color = darkModeColor.white;
  }
  return color;
};

export const darkModeColor = {
  dark: '#333333',
  white: '#fff',
};

export default DarkMode;
