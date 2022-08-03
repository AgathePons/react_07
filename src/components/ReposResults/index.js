// == Import
import PropTypes from 'prop-types';
import { Card, Image, Icon } from 'semantic-ui-react';

// == Composant
function ReposResults({
  avatarUrl,
  name,
  owner,
  description,
  htmlUrl,
}) {
  return (
    <Card>
      <Image
        alt={`Avatar of ${owner}`}
        src={avatarUrl}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span>{owner}</span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="linkify" />
          {htmlUrl}
        </a>
      </Card.Content>
    </Card>
  );
}

ReposResults.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  htmlUrl: PropTypes.string.isRequired,
};

export default ReposResults;
