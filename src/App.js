import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Wishlist } from './pages/wishlist/wishlist';
import { SearchBar } from './pages/searchbar/searchbar'
import Form from './pages/profile/profile';
import Form2 from './pages/profile/signUp';
import { ProductPage } from './pages/productPage/productPage';
import { SellerPage } from './pages/sellerPage/sellerPage';
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
            <Route path="/HCI-website" element={<SearchBar />} />
            <Route path="HCI-website/profile" element={<Form />} />
            <Route path="HCI-website/sign-up" element={<Form2 />} /> 
            <Route path="HCI-website/:productId" element={<ProductPage />} />
            <Route path="HCI-website/:productId/:seller" element={<SellerPage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
