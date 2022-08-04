// == Import
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

// == Composant
function Messages({ currentSearchValue, isLoading, counter }) {
  return (
    <Segment>
      {isLoading && (
        <p>
          Une recherche pour le terme <strong>{currentSearchValue}</strong> est en cours.<br />
        </p>
      )}
      {!isLoading && counter !== 0 && (
        <p>
          Vous avez recherché le terme <strong>{currentSearchValue}</strong>.<br />
          La recherche a donné <strong>{counter}</strong> résultat{counter > 1 && 's'}.
        </p>
      )}
      {!isLoading && counter === 0 && (
        <p>
          Vous pouvez lancer une recherche.
        </p>
      )}
    </Segment>
  );
}

Messages.propTypes = {
  currentSearchValue: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  counter: PropTypes.number.isRequired,
};

export default Messages;
