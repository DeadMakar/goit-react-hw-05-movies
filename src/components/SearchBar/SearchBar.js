import { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const onChange = ({ target }) => setQuery(target.value);
  const onSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      alert('Enter the title of the movie');
      return;
    }
    handleSearch(query.trim());
    setQuery('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="searchQuery"
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Search for a movie..."
        onChange={onChange}
      />
      <button>
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
