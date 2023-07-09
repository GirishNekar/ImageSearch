import "./SearchBar.css";
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="searchBar">
      
      <form onSubmit={handleFormSubmit}>
      <h3>Search For Images</h3>
        <input value={term} onChange={handleChange} />
        
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchBar;
