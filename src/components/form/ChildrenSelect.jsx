import FormField from './FormField';
import AlergiesSelect from './AlergiesSelect';
import FieldList from './FieldList';

const ChildrenSelect = ({ entries, add, remove, update }) => {
  return (
    <FieldList count={entries.length} add={add} remove={remove} title="Crianças">
      {entries.map(({ id, name, age }, index) => (
        <>
          <div key={id} className="flex items-end gap-3">
            <div className="grow w-1/2">
              <FormField
                type="text"
                id={`name-${id}`}
                name="name"
                value={name}
                label={false}
                placeholder="Nome"
                onChange={(event) => update(id, { name: event.target.value })}
              />
            </div>

            <div className="w-1/2 flex-shrink-0">
              <div className="flex items-center gap-2">
                <FormField
                  type="number"
                  id={`age-${id}`}
                  name="age"
                  value={age}
                  label={false}
                  placeholder="Idade"
                  onChange={(event) => update(id, { age: event.target.value })}
                />
                <span className="whitespace-nowrap">anos</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <input type="radio" id={`opt1-${id}`} name={`cerimonia-festa-${id}`} />
              <label htmlFor={`opt1-${id}`}>Vai apenas à cerimónia</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="radio" id={`opt2-${id}`} name={`cerimonia-festa-${id}`} />
              <label htmlFor={`opt2-${id}`}>Vai à cerimónia e à festa</label>
            </div>
          </div>
        </>
      ))}
    </FieldList>
  );
};

export default ChildrenSelect;
