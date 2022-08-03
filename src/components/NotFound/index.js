// == Import
import { Card } from 'semantic-ui-react';

// == Composant
function NotFound() {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Description>
          <h2>404</h2>
          <h3>Not found</h3>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default NotFound;
