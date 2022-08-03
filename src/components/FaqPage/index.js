// == Import
import { Card } from 'semantic-ui-react';

// == Composant
function FaqPage() {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Description>
          <h2>FAQ</h2>
          <h3>A quoi ça sert ?</h3>
          <p>
            Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.
          </p>
          <h3>Comment faire une recherche ?</h3>
          <p>
            Sur la page recherche, complétez le champ de recherche et valider la recherche.
          </p>
          <h3>Puis-je chercher n'importe quel terme ?</h3>
          <p>
            Oui, c'est fou.
          </p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default FaqPage;
