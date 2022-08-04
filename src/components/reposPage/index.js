// == Import
import { useState, useEffect } from 'react';

import requestReposList from 'src/requests/reposRequests';

import SearchBar from 'src/components/SearchBar';
import Messages from 'src/components/Messages';
import ReposResults from 'src/components/ReposResults';

import { Card, Segment, Loader } from 'semantic-ui-react';

// == Composant
function ReposPage() {
  const [searchInputText, setSearchInputText] = useState('');
  const [currentSearchValue, setCurrentSearchValue] = useState('');
  const [reposData, setReposData] = useState([]);
  const [searchResultCount, setSearchResultCount] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchInputChange = (event) => {
    setSearchInputText(event.target.value);
  };

  const handleSearchInputSubmit = async () => {
    // event.preventDefault() is handled by Semantic UI
    console.log('search:', searchInputText);
    if (searchInputText !== '') setCurrentSearchValue(searchInputText);
  };

  // trigger when currentSearchValue is changed
  useEffect(() => {
    // Because it is not recommended to use async directly with the useEffect,
    // we declare an async function execRequest in the useEffect and we execute it directly (iife)
    (async () => {
      // to avoid 422 error, if search input is empty, don't call API
      if (searchInputText === '') return;
      setIsLoading(true);
      try {
        const response = await requestReposList(searchInputText);
        if (response) {
          setSearchInputText('');
          setSearchResultCount(response.data.total_count);
          setReposData(response.data.items);
        }
      }
      catch (error) {
        // console.error(error);
      }
      setIsLoading(false);
    })();

    // execRequest();
  }, [currentSearchValue]);

  return (

    <>
      <Segment>
        <SearchBar
          searchInputText={searchInputText}
          onSearchInputChange={handleSearchInputChange}
          onSearchInputSubmit={handleSearchInputSubmit}
        />
      </Segment>
      <Messages
        currentSearchValue={currentSearchValue}
        isLoading={isLoading}
        counter={searchResultCount}
      />
      {isLoading && (
      <Loader active inline="centered" />
      )}
      {!isLoading && (
      <Card.Group>
        {
          reposData.map((repo) => (
            <ReposResults
              key={repo.id}
              avatarUrl={repo.owner.avatar_url}
              name={repo.full_name}
              owner={repo.owner.login}
              description={repo.description}
              htmlUrl={repo.html_url}
            />
          ))
        }
      </Card.Group>
      )}
    </>
  );
}

// == Export
export default ReposPage;
