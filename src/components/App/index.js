// == Import
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import './styles.scss';

import HeaderElement from 'src/components/HeaderElement';
import SearchBar from 'src/components/SearchBar';
import ReposResults from 'src/components/ReposResults';
import FaqPage from 'src/components/FaqPage';
import NotFound from 'src/components/NotFound';
import { Card } from 'semantic-ui-react';

// == Composant
function App() {
  const [searchInputText, setSearchInputText] = useState('');
  const [reposData, setReposData] = useState([]);
  const [searchResultCount, setSearchResultCount] = useState(0);

  const handleLoadData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${searchInputText}`);
      console.log(`url : https://api.github.com/search/repositories?q=${searchInputText}`);
      setSearchResultCount(response.data.total_count);
      setReposData(response.data.items);
    }
    catch (error) {
      console.error(error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchInputText(event.target.value);
  };

  const handleSearchInputSubmit = async (event) => {
    event.preventDefault();
    console.log('search:', searchInputText);
    await handleLoadData();
  };

  return (
    <div className="app">
      <div className="ui container">
        <HeaderElement />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Card fluid>
                  <Card.Content>
                    <Card.Description>
                      <SearchBar
                        searchInputText={searchInputText}
                        onSearchInputChange={handleSearchInputChange}
                        onSearchInputSubmit={handleSearchInputSubmit}
                      />
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Card.Content>
                    <Card.Description>
                      La recherche a donné {searchResultCount} résultats
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card.Group>
                  {
                    reposData.map((repo) => (
                      <ReposResults
                        key={repo.id}
                        avatarUrl={repo.owner.avatar_url}
                        name={repo.name}
                        owner={repo.owner.login}
                        description={repo.description}
                        htmlUrl={repo.html_url}
                      />
                    ))
                  }
                </Card.Group>
              </>
            )}
          />

          <Route
            path="/faq"
            element={(
              <FaqPage />
            )}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    </div>
  );
}

// == Export
export default App;
