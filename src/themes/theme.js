import * as React from 'react';

export const themes = {
  light: {
    foreground: '#ffffff',
    background: '#ffffff',
    neutral_background: '#1a1a1a',
    neutral_test: '#000000',
    selection_test: '#000000'
  },
  dark: {
    foreground: '#171717',
    background: '#2f2f30',
    neutral_background: '#1a1a1a',
    neutral_test: '#d8d4cf',
    selection_test: '#e8e6e3'
  },
}


export const ThemeProvider = ({element}) => {
  const [theme, setTheme] = React.useState('light');

  const value = React.useMemo(
    () => ({ theme, setTheme }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <>
        {element}
      </>
      
    </ThemeContext.Provider>
  )
}