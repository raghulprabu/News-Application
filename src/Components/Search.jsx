import React, { useState } from 'react';
import Navbar from './Navbar';
import News from './News';

const Search= () => {
    const [searchTerm, setSearchTerm] = useState('india');  

    const handleSearch = (term) => {
        setSearchTerm(term);  
    };

    return (
        <div>
            <Navbar onSearch={handleSearch} />
            <News searchTerm={searchTerm} />
        </div>
    );
};

export default Search;
