// == Import
import SearchBar from 'src/components/SearchBar';
import ReposResults from 'src/components/ReposResults';
import FaqPage from 'src/components/FaqPage';
import { Menu, Card, Icon } from 'semantic-ui-react';

// == Composant
function App() {
  return (
    <div className="app">
      <div className="ui container">
        <header>
          <Icon name="github" size="large" />
          <h1>GitHub</h1>
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
              <SearchBar />
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
      </div>

    </div>
  );
}

// == Export
export default App;
