import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Wishlist } from './pages/wishlist/wishlist';
import Form from './pages/profile/profile';
import { ProductPage } from './pages/productPage/productPage';
import { ShopContextProvider } from './context/shop-context';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
      <ShopContextProvider>
        <Router>
          <Navbar /> 
          <div className='switch'>
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
          <Routes>
            <Route path="/HCI-website" element={<Shop />} />
            <Route path="HCI-website/cart" element={<Cart />} />
            <Route path="HCI-website/wishlist" element={<Wishlist />} />
            <Route path="HCI-website/profile" element={<Form />} />
            <Route path="HCI-website/:productId" element={<ProductPage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;