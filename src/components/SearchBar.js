import React, { useState, useEffect } from 'react';
import '../styles/SearchBar.css'

const SearchBar = ({ notes }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filteredResults = notes.filter((note) => {
      const noteData = note.text;
      return noteData && search && noteData.toLowerCase().includes(search.toLowerCase());
    });
    setResults(filteredResults);
  }, [search, notes]);
  return (
    <div className='search-container'>
      <input type='text' onChange={(e) => setSearch(e.target.value)} className='searchbar' placeholder='Search'/>
      <div className='searchResult'>
        {results.map((res) => (
          <div className='item' key={res.id} onClick={()=>alert(res.text)}>
            {res.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
