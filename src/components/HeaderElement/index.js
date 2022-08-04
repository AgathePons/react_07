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
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'item active' : 'item')}
        >
          Recherche
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? 'item active' : 'item')}
        >
          FAQ
        </NavLink>
      </Menu>
    </header>
  );
}

export default HeaderElement;
