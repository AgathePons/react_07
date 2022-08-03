// == Import
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

// == Composant
function SearchBar({ searchInputText, onSearchInputChange, onSearchInputSubmit }) {
  return (
    <Form onSubmit={onSearchInputSubmit}>
      <Form.Input
        fluid
        focus
        icon="search"
        placeholder="Search..."
        type="text"
        value={searchInputText}
        onChange={onSearchInputChange}
      />
    </Form>
  );
}

SearchBar.propTypes = {
  searchInputText: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  onSearchInputSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
