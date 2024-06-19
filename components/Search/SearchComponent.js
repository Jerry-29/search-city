import { useState, useEffect, useRef } from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ onSearch, disabled }) => {
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);
    const [searchTimeout, setSearchTimeout] = useState(null);

    useEffect(() => {
        const handleShortcut = (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key === '/') {
                inputRef.current.focus();
            }
        };

        window.addEventListener('keydown', handleShortcut);

        return () => {
            window.removeEventListener('keydown', handleShortcut);
        };
    }, []);

    // To Limit Multiple Contineous Enter press
    const handleThrottledSearch = (searchQuery) => {
        onSearch(searchQuery);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }
            setSearchTimeout(
                setTimeout(() => {
                    handleThrottledSearch(query);
                }, 1000)
            );
        }
    };

    return (
        <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for a city..."
            disabled={disabled}
            className={styles.searchBox}
        />
    );
};

export default SearchBox;
