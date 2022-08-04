// == Import
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

// == Composant
function Messages({ currentSearchValue, isLoading, counter }) {
  const [resultCounter, setResultCounter] = useState(undefined);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!counter || resultCounter >= counter) {
        return;
      }
      // because setResultCounter is async, we have to avoid this:
      // setResultCounter(resultCounter + 1)
      // --> use the current value in the function that is modifying the value
      // instead, we can pass a function (and take advantages of the function closure)
      setResultCounter((oldCount) => {
        const newCountValue = Math.ceil(oldCount + (counter / 20));
        if (newCountValue > counter) return counter;
        return newCountValue;
      });
    }, 50);
    // return function at the end of the useEffect callback
    // this function will be called on the unMount and will clean the timeout and so on.
    // those functions can be names clean-up functions
    return () => {
      clearTimeout(timeoutId);
    };
  }, [resultCounter]);

  useEffect(() => {
    if (counter) {
      setResultCounter(0);
    }
  }, [counter]);

  return (
    <Segment>
      {isLoading && (
        <p>
          Une recherche pour le terme <strong>{currentSearchValue}</strong> est en cours.<br />
        </p>
      )}
      {!isLoading && counter && (
        <p>
          Vous avez recherché le terme <strong>{currentSearchValue}</strong>.<br />
          La recherche a donné <strong>{resultCounter}</strong> résultat{resultCounter > 1 && 's'}.
        </p>
      )}
      {!isLoading && !counter && (
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
  counter: PropTypes.number,
};

Messages.defaultProps = {
  counter: undefined,
};

export default Messages;
