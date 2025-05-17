
import React from 'react';

const SearchIcon = ({className, isSearchOpen, setIsSearchOpen}) => (
    <i
        className={`fa-solid fa-magnifying-glass search-icon${className ? " " + className : ""}`}
        onClick={() => setIsSearchOpen(!isSearchOpen)}
    ></i>
);

export default SearchIcon;