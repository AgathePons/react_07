// == Import
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

// == Composant
function SearchBar({  }) {
  return (
    <header>
      <div class="ui icon input"><input type="text" placeholder="Search..."/><i aria-hidden="true" class="search icon"></i></div>
    </header>
  );
}

SearchBar.propTypes = {
  
};

export default SearchBar;
