import React from 'react';


const SearchBox = ({ searchChange }) => {
    console.log('SearchBox')
    return (
        <div>
        <input className= 'pa3 ba b--green bg-lightest-blue'
        aria-label="Enter your robo friend name"
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
        >
       
        </input>
        </div>
    );
}

export default SearchBox;