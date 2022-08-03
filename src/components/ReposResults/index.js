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
        <a href={htmlUrl} target="_blank" rel="noreferrer">
          <Icon name="linkify" />
          See on GitHub
        </a>
      </Card.Content>
    </Card>
  );
}

ReposResults.defaultProps = {
  description: null,
};

ReposResults.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  description: PropTypes.string,
  htmlUrl: PropTypes.string.isRequired,
};

export default ReposResults;
