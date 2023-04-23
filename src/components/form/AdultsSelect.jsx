import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import FormField from './FormField';
import FieldList from './FieldList';
import AllergiesSelect from './AllergiesSelect';

const AdultsSelect = () => {
  const { unregister } = useFormContext();
  const [adults, setAdults] = useState(1);
  const entries = Array.apply(null, { length: adults }).map(Number.call, Number);

  const addAdult = () => setAdults((prev) => prev + 1);
  const removeAdult = () => {
    unregister(`adults.${adults - 1}.name`);
    unregister(`adults.${adults - 1}.allergies`);
    setAdults((prev) => prev - 1);
  };

  return (
    <FieldList count={entries.length} add={addAdult} remove={removeAdult} min={1} title="Adultos">
      {entries.map((index) => (
        <div key={`adult-${index}`} className="flex items-start gap-3">
          <div className="grow w-1/2">
            <FormField
              type="text"
              id={`adults.${index}.name`}
              name={`adults.${index}.name`}
              label={false}
              placeholder="Nome"
              required
            />
          </div>

          <div className="w-1/2 flex-shrink-0">
            <AllergiesSelect name={`adults.${index}.allergies`} />
          </div>
        </div>
      ))}
    </FieldList>
  );
};

export default AdultsSelect;
