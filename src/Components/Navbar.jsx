import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, InputBase } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';


const Navbar = ({ onSearch }) => {

  const [search, setSearch] = useState('');

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    onSearch(search); 
  };

  return (
    <Box className="navbarContainer">
      <AppBar position="static" className='navbar-color'>
        <Toolbar className="toolbar">
          <Typography variant="h6" className="title">
            Today India
          </Typography>

          <Box className="navButtons">
            <Button color="inherit" className="navButton">All News</Button>
            <Button color="inherit" className="navButton">Trending</Button>
          </Box>

          <div className="searchContainer">
            {/* <SearchIcon className="searchIcon" /> */}
            <InputBase
              placeholder="Search News…"
              value={search}
              onChange={handleInput}
              className="searchInput"
              inputProps={{ 'aria-label': 'search' }}
            />
             <Button onClick={handleSearch} color="inherit" className="searchButton">
            Search
          </Button>
          </div>

         
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
