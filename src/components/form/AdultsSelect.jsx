import FormField from './FormField';
import AlergiesSelect from './AlergiesSelect';
import FieldList from './FieldList';
import PropTypes from 'prop-types';

const AdultsSelect = ({ entries, add, remove, update }) => {
  return (
    <FieldList count={entries.length} add={add} remove={remove} min={1} title="Adultos">
      {entries.map(({ id, name, allergies }) => (
        <div key={id} className="flex items-end gap-3">
          <div className="grow w-1/2">
            <FormField
              type="text"
              id={id}
              name="name"
              value={name}
              label={false}
              placeholder="Nome"
              onChange={(event) => update(id, { name: event.target.value })}
              required
            />
          </div>

          <div className="w-1/2 flex-shrink-0">
            <AlergiesSelect
              allergies={allergies}
              setAllergies={(allergies) => update(id, { allergies })}
            />
          </div>
        </div>
      ))}
    </FieldList>
  );
};

AdultsSelect.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      allergies: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};

export default AdultsSelect;
