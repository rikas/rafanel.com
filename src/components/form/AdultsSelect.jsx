import FormField from './FormField';
import AlergiesSelect from './AlergiesSelect';
import FieldList from './FieldList';

const AdultsSelect = ({ entries, add, remove, update }) => {
  return (
    <FieldList count={entries.length} add={add} remove={remove} title="Adultos">
      {entries.map(({ id, name, allergies }, index) => (
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

export default AdultsSelect;
