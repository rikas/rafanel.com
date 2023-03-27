import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { createPortal } from 'react-dom';
import { v4 as uuid } from 'uuid';

import Button from './Button';
import Title from './Title';
import FormField from './form/FormField';
import AdultsSelect from './form/AdultsSelect';
import ChildrenSelect from './form/ChildrenSelect';

const FormDialog = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({
    email: '',
    adults: [{ id: uuid(), name: '', allergies: [] }],
    children: [],
    comments: '',
  });

  const email = formState.email;
  const comments = formState.comments;
  const adults = formState.adults;
  const children = formState.children;

  const onEmailChange = (event) => {
    const { value } = event.target;

    setFormState({ ...formState, email: value });
  };

  const onCommentsChange = (event) => {
    const { value } = event.target;

    setFormState({ ...formState, comments: value });
  };

  const addAdult = () => {
    setFormState({ ...formState, adults: [...adults, { id: uuid(), name: '', allergies: [] }] });
  };

  const removeAdult = () => {
    setFormState({ ...formState, adults: adults.slice(1) });
  };

  const updateAdult = (id, data) => {
    const newAdults = adults.map((adult) => {
      if (adult.id === id) {
        return { ...adult, ...data };
      }
      return adult;
    });

    setFormState({ ...formState, adults: newAdults });
  };

  const addChild = () => {
    setFormState({ ...formState, children: [...children, { id: uuid(), name: '', age: '' }] });
  };

  const removeChild = () => {
    setFormState({ ...formState, children: children.slice(1) });
  };

  const updateChild = (id, data) => {
    const newChildren = children.map((child) => {
      if (child.id === id) {
        return { ...child, ...data };
      }
      return child;
    });

    setFormState({ ...formState, children: newChildren });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden={!isOpen} />
        </Transition.Child>

        {createPortal(
          <div className="absolute hidden text-xs bg-black text-lime-200 p-3 rounded m-2 top-0 left-0">
            <pre>
              <code>{JSON.stringify(formState, null, 2)}</code>
            </pre>
          </div>,
          document.body,
        )}

        <div className="fixed inset-0 flex items-center justify-center p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-xl rounded bg-white">
              <form onSubmit={() => alert('SUBMIT')}>
                <div className="flex flex-col px-4 py-3 sm:px-6 sm:py-8">
                  <div className="flex flex-col gap-4">
                    <Dialog.Title as={Title}>RSVP</Dialog.Title>
                    <Dialog.Description>Paleio para introdução disto?</Dialog.Description>

                    <FormField
                      name="email"
                      id="email"
                      type="email"
                      label="Email"
                      value={email}
                      onChange={onEmailChange}
                      autoFocus
                    />

                    <AdultsSelect
                      entries={adults}
                      add={addAdult}
                      remove={removeAdult}
                      update={updateAdult}
                    />

                    <ChildrenSelect
                      entries={children}
                      add={addChild}
                      remove={removeChild}
                      update={updateChild}
                    />

                    <div className="mt-5">
                      <FormField
                        name="comments"
                        id="comments"
                        type="text"
                        value={comments}
                        onChange={onCommentsChange}
                        placeholder="Alertas, sugestões, votos, etc."
                        label="Comentários adicionais ou palavras especiais aos noivos?"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex bg-gray-100 px-4 py-5 sm:px-6 sm:py-8 mt-8 justify-between">
                  <Button type="button" onClick={onClose} variant="outline">
                    Cancelar
                  </Button>

                  <Button type="submit" onClick={onClose}>
                    Enviar
                  </Button>
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FormDialog;
