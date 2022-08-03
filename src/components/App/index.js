// == Import
import { useState } from 'react';

import SearchBar from 'src/components/SearchBar';
import ReposResults from 'src/components/ReposResults';
import FaqPage from 'src/components/FaqPage';
import NotFound from 'src/components/NotFound';
import {
  Header,
  Menu,
  Card,
  Icon,
} from 'semantic-ui-react';

// == Composant
function App() {
  const [searchInputText, setSearchInputText] = useState('');
  const [reposData, setReposData] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchInputText(event.target.value);
  };

  const handleSearchInputSubmit = (event) => {
    event.preventDefault();
    console.log('search:', searchInputText);
  };

  const handleLoadData = async () => {
    try {
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="app">
      <div className="ui container">
        <header>
          <Header as="h1">
            <Icon name="github" size="large" />
            GitHub
          </Header>
        </header>
        <Menu>
          <Menu.Item
            name="Recherche"
          >
            Recherche
          </Menu.Item>
          <Menu.Item
            name="FAQ"
          >
            FAQ
          </Menu.Item>
        </Menu>
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
        <Card.Group>
          <ReposResults />
          <ReposResults />
          <ReposResults />
          <ReposResults />
          <ReposResults />
          <ReposResults />
        </Card.Group>

        <FaqPage />

        <NotFound />
      </div>

    </div>
  );
}

// == Export
export default App;
