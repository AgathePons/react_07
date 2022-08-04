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
        {/* use the Menu.Item from Semantic UI as the NavLink from React Router,
        handle the active elements automatically */}
        <Menu.Item
          name="Recherche"
          to="/"
          as={NavLink}
        >
          Recherche
        </Menu.Item>
        {/* or use the NavLink from React Router and thanks to the special function of NavLink,
        add the Semantic UI classes to display active styles */}
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
