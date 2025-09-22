import { useParams } from 'react-router-dom';
import { Person } from '../../types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  person: Person;
}

export const PersonItem: React.FC<Props> = ({ person }) => {
  const { personSlug } = useParams();
  const selectedPerson = personSlug ? personSlug : null;

  return (
    <tr
      data-cy="person"
      key={person.slug}
      className={cn({
        'has-background-warning': person.slug === selectedPerson,
      })}
    >
      <td>
        {person.slug === selectedPerson ? (
          <Link to="/people">{person.name}</Link>
        ) : (
          <Link to={`/people/${person.slug}`}>{person.name}</Link>
        )}
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>{person.motherName}</td>
      <td>{person.fatherName}</td>
    </tr>
  );
};
