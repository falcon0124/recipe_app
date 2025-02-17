// src/components/PreviousSearches.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';

export default function PreviousSearches({ setSearchTerm }) {
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'];
    const [input, setInput] = useState('');

    const handleSearch = () => {
        if (input.trim()) {
            setSearchTerm(input);
            setInput('');
        }
    };

    return (
        <div className="previous-searches section">
            <h2>Previous Searches</h2>
            <div className="previous-searches-container">
                {searches.map((search, index) => (
                    <div
                        key={index}
                        style={{ animationDelay: index * 0.1 + 's' }}
                        className="search-item"
                        onClick={() => setSearchTerm(search)}
                    >
                        {search}
                    </div>
                ))}
            </div>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search ..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button className="btn" onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
}
