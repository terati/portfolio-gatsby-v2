import * as React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}


export const ThemeProvider = ({element}) => {
  const [theme, setTheme] = React.useState('light');

  const value = React.useMemo(
    () => ({ theme, setTheme }),
    [theme]
  );

  return (
    // <ThemeContext.Provider value={value}>
      <>
        {element}
      </>
      
    // </ThemeContext.Provider>
  )
}