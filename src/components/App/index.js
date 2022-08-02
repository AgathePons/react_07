// == Import
import SearchBar from 'src/components/SearchBar';
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
      </div>

    </div>
  );
}

// == Export
export default App;
