import { useState } from 'react';
import { Button, Form, Input } from './SearchBar.styled';

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
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="searchQuery"
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Search for a movie..."
        onChange={onChange}
      />
      <Button>Search</Button>
    </Form>
  );
};

export default SearchBar;
