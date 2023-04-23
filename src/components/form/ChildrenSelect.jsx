import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import FormField from './FormField';
import FieldList from './FieldList';
import AllergiesSelect from './AllergiesSelect';
import ChildModeSelect from './ChildModeSelect';

const ChildrenSelect = () => {
  const { unregister } = useFormContext();
  const [children, setChildren] = useState(0);
  const entries = Array.apply(null, { length: children }).map(Number.call, Number);

  const addChild = () => setChildren((prev) => prev + 1);
  const removeChild = () => {
    unregister(`children.${children - 1}.name`);
    unregister(`children.${children - 1}.age`);
    unregister(`children.${children - 1}.allergies`);
    unregister(`children.${children - 1}.mode`);
    setChildren((prev) => prev - 1);
  };

  return (
    <FieldList count={entries.length} add={addChild} remove={removeChild} title="Crianças">
      {entries.map((index) => (
        <div key={`child-${index}`}>
          <div className="flex items-start gap-3">
            <div className="w-1/3">
              <FormField
                type="text"
                label={false}
                name={`children.${index}.name`}
                id={`children.${index}.name`}
                placeholder="Nome"
                required
              />
            </div>

            <div className="w-20 flex-shrink-1">
              <div className="flex items-center gap-2">
                <FormField
                  type="number"
                  name={`children.${index}.age`}
                  id={`children.${index}.age`}
                  label={false}
                  placeholder="Idade"
                  min={0}
                  required
                />
              </div>
            </div>

            <div className="w-1/3 grow flex-shrink-0">
              <AllergiesSelect name={`children.${index}.allergies`} />
            </div>
          </div>

          <ChildModeSelect index={index} />
        </div>
      ))}
    </FieldList>
  );
};

export default ChildrenSelect;
