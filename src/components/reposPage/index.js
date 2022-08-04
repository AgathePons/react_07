// == Import
import { useState, useEffect } from 'react';

import requestReposList from 'src/requests/reposRequests';

import SearchBar from 'src/components/SearchBar';
import Messages from 'src/components/Messages';
import ReposResults from 'src/components/ReposResults';

import {
  Card, Segment, Button, Loader,
} from 'semantic-ui-react';

// == Composant
function ReposPage() {
  const [searchInputText, setSearchInputText] = useState('');
  const [currentSearchValue, setCurrentSearchValue] = useState('');
  const [reposData, setReposData] = useState(null);
  const [searchResultCount, setSearchResultCount] = useState(undefined);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const resetRequest = () => {
    setPageNumber(1);
    setReposData(null);
  };

  const handleSearchInputChange = (event) => {
    setSearchInputText(event.target.value);
  };

  const handleSearchInputSubmit = async () => {
    // event.preventDefault() is handled by Semantic UI
    console.log('search:', searchInputText);
    if (searchInputText !== '') {
      resetRequest();
      setCurrentSearchValue(searchInputText);
    }
  };

  const handleLoadMoreResults = () => {
    setPageNumber((oldPageNb) => oldPageNb + 1);
  };

  // trigger when currentSearchValue is changed
  useEffect(() => {
    // Because it is not recommended to use async directly with the useEffect,
    // we declare an async function execRequest in the useEffect and we execute it directly (iife)
    (async () => {
      // to avoid 422 error, if search input is empty, don't call API
      if (currentSearchValue === '') return;
      setIsLoading(true);
      try {
        const response = await requestReposList(searchInputText, pageNumber);
        if (response) {
          if (pageNumber === 1) {
            console.log('first page');
            setReposData(response.data.items);
          }
          else {
            console.log('other pages');
            // setReposData(response.data.items);
            setReposData((oldValue) => ([
              ...oldValue,
              ...response.data.items,
            ]));
          }

          // setSearchInputText('');
          setSearchResultCount(response.data.total_count);
        }
      }
      catch (error) {
        // console.error(error);
      }
      setIsLoading(false);
    })();

    // execRequest();
  }, [currentSearchValue, pageNumber]);

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
      {(isLoading && !reposData) && (
      <Loader active inline="centered" />
      )}
      {reposData && (
      <>
        <Card.Group>
          {reposData.map((repo) => (
            <ReposResults
              key={repo.id}
              avatarUrl={repo.owner.avatar_url}
              name={repo.full_name}
              owner={repo.owner.login}
              description={repo.description}
              htmlUrl={repo.html_url}
            />
          ))}
        </Card.Group>
        {(reposData.length > 0) && (
          <Button loading={isLoading} onClick={handleLoadMoreResults}>
            Plus de repos
          </Button>
        )}
      </>
      )}
    </>
  );
}

// == Export
export default ReposPage;
