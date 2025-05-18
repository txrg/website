import React, {useState, useEffect} from 'react';

const Search = ({placeholder, inputRef, isSearchOpen, setIsSearchOpen, setSearch}) => {
    const [query, setQuery] = useState("")

    useEffect(() => {
        if (isSearchOpen) {
            inputRef.current.focus();
        } else {
            setQuery("");
            setSearch("")
        }
    }, [isSearchOpen]);

    const escapeRegex = (string) => (string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&'));

    const handleKeyDown = (e) => {
        console.log({ e });
        const sanitizedQuery = escapeRegex(query);
        if (e.code === "Enter") {
            setSearch(sanitizedQuery);
        } else if (e.code === "Escape") {
            setIsSearchOpen(false);
        }
    };

    const handleClick = () => {
        const sanitizedQuery = escapeRegex(query);
        setSearch(sanitizedQuery);
    }

    return (
        <div className={`search${!isSearchOpen ? " is-invisible" : ""}`} >
            <input
                type='text'
                placeholder={placeholder}
                ref={inputRef}
                value={query}
                onKeyDown={handleKeyDown}
                onChange={(e) => setQuery(e.target.value)}
            ></input>
            <i className="fa-solid fa-circle-chevron-right search-enter" onClick={handleClick}></i>
        </div>
    );
};

export default Search;