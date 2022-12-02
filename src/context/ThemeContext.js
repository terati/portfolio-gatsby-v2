import * as React from 'react';

export const ThemeContext = React.createContext({
  theme: 'light',
  setTheme: () => {},
})

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = React.useState('light');

  const value = React.useMemo(
    () => ({ theme, setTheme }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
  )

}
