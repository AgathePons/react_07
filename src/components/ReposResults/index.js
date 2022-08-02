// == Import
/* import PropTypes from 'prop-types'; */
import { Card, Image } from 'semantic-ui-react';

// == Composant
function ReposResults() {
  return (
    <Card>
      <Image
        alt="a gull"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/1280px-Gull_portrait_ca_usa.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
}

/* ReposResults.propTypes = {
}; */

export default ReposResults;
