import React, {useSate} from 'react';

import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"

export const SearchBar = () => {
  const[input, setInput] = useState("e.target.value");
  return (
    <div className= "input-wrapper">
      <FaSearch id="search-icon" />
      <input placeholder="Type to search..." value={input} onChange={(e) => setInput()/>
    </div>
  )
}
