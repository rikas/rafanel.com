import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

import FormSelect from './FormSelect';

const possibleAlergies = [
  { id: 'vegetariano', name: 'Vegetariano' },
  { id: 'vegan', name: 'Vegan' },
  { id: 'celiaco', name: 'Doença celíaca' },
  { id: 'frutos secos', name: 'Alergia a frutos secos' },
  { id: 'marisco', name: 'Alergia a marisco' },
];

const AlergiesSelect = ({ alergies, setAlergies }) => {
  return (
    <Listbox value={alergies} onChange={setAlergies} name="alergias" multiple>
      <div className="relative w-full">
        <Listbox.Button className="border w-full border-gray-500 py-2 pl-3 pr-10 text-left sm:text-sm">
          <span className="text-base w-full flex justify-between align-bottom">
            {alergies.length === 0 ? (
              <span className="text-gray-500 whitespace-nowrap truncate">
                Restrições alimentares
              </span>
            ) : (
              <span className="whitespace-nowrap truncate overflow-hidden">
                {alergies.map((alergy) => alergy.name).join(', ')}
              </span>
            )}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            </div>
          </span>
        </Listbox.Button>

        <Listbox.Options className="absolute z-50 mt-1 max-h-64 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {possibleAlergies.map((alergy) => (
            <Listbox.Option
              key={alergy.id}
              value={alergy}
              className="w-full bg-white cursor-pointer"
            >
              {({ active, selected }) => (
                <div
                  className={`px-2 py-2 sm:py-3 ${
                    selected ? 'bg-slate-100 hover:bg-slate-200' : ''
                  } ${active ? 'bg-slate-200' : 'bg-white text-black'}`}
                >
                  <div className="flex gap-3 items-center">
                    <CheckIcon
                      className={`h-5 w-5 border border-slate-400 ${
                        selected ? 'bg-slate-400' : ''
                      } ${active ? 'border-slate-100' : ''} text-white bg-white rounded`}
                    />
                    {alergy.name}
                  </div>
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default AlergiesSelect;