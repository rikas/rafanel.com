import PropTypes from 'prop-types';
import FormField from './FormField';
import AlergiesSelect from './AlergiesSelect';
import FieldList from './FieldList';
import Stack from '../Stack';

export const Modes = {
  ALL: 'ceremony-and-party',
  CEREMONY: 'ceremony-only',
};

const ChildrenSelect = ({ entries, add, remove, update }) => {
  return (
    <FieldList count={entries.length} add={add} remove={remove} title="Crianças">
      {entries.map(({ id, name, age, mode, allergies }) => (
        <div key={id}>
          <div className="flex items-end gap-3">
            <div className="w-1/3">
              <FormField
                type="text"
                id={`name-${id}`}
                name="name"
                value={name}
                label={false}
                placeholder="Nome"
                onChange={(event) => update(id, { name: event.target.value })}
                required
              />
            </div>

            <div className="w-20 flex-shrink-1">
              <div className="flex items-center gap-2">
                <FormField
                  type="number"
                  id={`age-${id}`}
                  name="age"
                  value={age}
                  label={false}
                  placeholder="Idade"
                  onChange={(event) => update(id, { age: event.target.value })}
                  required
                />
              </div>
            </div>

            <div className="w-1/3 grow flex-shrink-0">
              <AlergiesSelect
                allergies={allergies}
                setAllergies={(allergies) => update(id, { allergies })}
              />
            </div>
          </div>

          <Stack direction="row" gap={5} className="mt-2">
            <Stack direction="row" itemsCenter>
              <input
                type="radio"
                id={`opt1-${id}`}
                name={`cerimonia-festa-${id}`}
                className="cursor-pointer"
                onChange={() => update(id, { mode: Modes.CEREMONY })}
                checked={mode === Modes.CEREMONY}
              />
              <label htmlFor={`opt1-${id}`} className="cursor-pointer pl-2">
                Apenas cerimónia
              </label>
            </Stack>

            <Stack direction="row" itemsCenter>
              <input
                type="radio"
                id={`opt2-${id}`}
                name={`cerimonia-festa-${id}`}
                className="cursor-pointer"
                onChange={() => update(id, { mode: Modes.ALL })}
                checked={mode === Modes.ALL}
              />
              <label htmlFor={`opt2-${id}`} className="cursor-pointer pl-2">
                Jantar e festa
              </label>
            </Stack>
          </Stack>
        </div>
      ))}
    </FieldList>
  );
};

ChildrenSelect.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number,
      mode: PropTypes.oneOf(Object.values(Modes)).isRequired,
      allergies: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};

export default ChildrenSelect;
