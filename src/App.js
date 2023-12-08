
import Navbar from './components/Nav'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import Product from './components/Product'
import { useState,createContext } from 'react';
import Foot from './components/Foot'

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div id={theme}>
        <Navbar theme={theme} toggleTheme={toggleTheme}/>
      
        <Product theme={theme}/>
        <Foot theme={theme} />

      </div>
     

    </ThemeContext.Provider>
  
    

    
  );
}

export default App;
