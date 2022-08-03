// == Import
import { Header, Icon, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// == Composant
function HeaderElement() {
  return (
    <header>
      <Header as="h1" textAlign="center">
        <Icon name="github" size="massive" />
        GitHub
      </Header>
      <Menu>
        <NavLink to="/">
          <Menu.Item
            name="Recherche"
          >
            Recherche
          </Menu.Item>
        </NavLink>
        <NavLink to="/faq">
          <Menu.Item
            name="FAQ"
          >
            FAQ
          </Menu.Item>
        </NavLink>
      </Menu>
    </header>
  );
}

export default HeaderElement;
