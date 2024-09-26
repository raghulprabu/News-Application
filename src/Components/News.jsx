import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';

import Cards from './Cards';
import "./Style.css";
import CircularIndeterminate from './Loading ';


const News = ({ searchTerm }) => {
    const arr = ["sports", "politics", "entertainment", "health", "fitness"];
    const [newsData, setNewsData] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeColor, setActiveColor] = useState(null);

    const [page, setPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1); 
    const API_KEY = "9c3ed8ee95884dec979460a60f96675b";
    const PAGE_SIZE = 10; 

    const getData = async (category, pageNum = 1) => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}&page=${pageNum}`);
        const responsapi = await response.json();
        const articles = responsapi.articles;
        setNewsData(articles);
        setTotalPages(Math.ceil(responsapi.totalResults / PAGE_SIZE)); 
    };

    const handleClick = (category, index) => {
        setActiveCategory(category);
        setActiveColor(index);
        setPage(1); 
        getData(category, 1);
    };

    const handlePageChange = (event, value) => {
        setPage(value);
        getData(activeCategory, value); 
    };

    useEffect(() => {
            setActiveCategory(searchTerm);
            getData(searchTerm, 1);
        
    }, [searchTerm]);

    return (
        <div className='tags'>
            <div>
                <p className='head'>Stay Updated with Today India News</p>
            </div>
            <div className='categoryBtn'>
                {arr.map((category, index) => {
                    return (
                        <button
                            key={index}
                            className={activeColor === index ? "tag-btn active" : "tag-btn"}
                            onClick={() => handleClick(category, index)}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>

            <div>
                {newsData ? <Cards data={newsData} /> : <CircularIndeterminate />}
            </div>

            <div className='pagination'>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                    />
            </div>
        </div>
    );
};

export default News;
