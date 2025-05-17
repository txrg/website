import React from 'react';

const Search = ({placeholder, isSearchOpen}) => (
    <div className={`search${!isSearchOpen ? " is-invisible" : ""}`} >
        <input type='text' placeholder={placeholder}></input>
        <i class="fa-solid fa-circle-chevron-right search-enter"></i>
    </div>
);

export default Search;