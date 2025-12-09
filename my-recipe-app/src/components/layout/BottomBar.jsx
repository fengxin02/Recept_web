import React, { useState } from 'react'
import './BottomBar.css'


/**
 * Fixed bottom navigation bar containing the search input and navigation buttons (like, home).
 * @param {Function} onNavigate - Function to change pages.
 * @param {string} activePage - The currently active page.
 * @param {Function} onSearch - Function to handle search submission.
 */
const BottomBar = ({ onNavigate, activePage, onSearch }) => {
  const [searchRes, setSearchRes] = useState('')


  const handleSubmit = () => {
    if (searchRes.trim()) { // only search if no empty
      onSearch(searchRes)
    }
  }

  //press enter to search
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const isFavPage = activePage === 'favorites';
  return (
    <div className="bottom-bar">
      
      {/* save button */}
     <button 
        onClick={() => onNavigate(isFavPage ? 'home' : 'favorites')}
        className="nav-btn"
      >
        {isFavPage ? 'Főoldal' : 'Kedvencek ❤︎'}
      </button>

      {/* search  */}
      <div className="search-box">
        <input 
          type="text" 
          placeholder="keresés..." 
          value={searchRes}
          onChange={(e) => setSearchRes(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input"
        />
        <button  onClick={handleSubmit} className="search-btn">keres</button>
      </div>
    </div>
  )
}

export default BottomBar