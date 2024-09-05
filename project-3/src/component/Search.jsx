import React, { useState } from 'react';

const Search = (props) => {
    const [key, setKey] = useState('');
    const filter = (searchKey) => {
        const lowercaseSearchKey = searchKey.toLowerCase();
        const filteredData = props.data.filter((item) => {
            return item.name.toLowerCase().includes(lowercaseSearchKey);
        });
        props.setData(filteredData);
    }
    return (
        <div className='searchForm'>
            <input 
                value={key} 
                onChange={(e) => setKey(e.target.value)} 
                type="text" 
                placeholder="looking for ..." 
                className='search' 
            />
            <button 
                onClick={() => filter(key)} 
                className='searchButton'
            >
                
            </button>
        </div>
    );
}



export default Search;
