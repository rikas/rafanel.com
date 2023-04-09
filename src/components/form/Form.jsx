import { useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import postRsvp from '../../googleSheets';
import { Dialog } from '@headlessui/react';
import AdultsSelect from './AdultsSelect';
import FormField from './FormField';
import Stack from '../Stack';
import Title from '../Title';
import ChildrenSelect, { Modes } from './ChildrenSelect';
import Button from '../Button';
import { BeatLoader } from 'react-spinners';
import PropTypes from 'prop-types';

function Form({ onClose, onSubmit }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    email: '',
    adults: [{ id: uuid(), name: '', allergies: [] }],
    children: [],
    comments: '',
  });

  const { email, comments, adults, children } = formState;

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
    setFormState({
      ...formState,
      children: [
        ...children,
        { id: uuid(), name: '', age: undefined, allergies: [], mode: Modes.ALL },
      ],
    });
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

  const submitForm = (event) => {
    formRef.current.reportValidity();
    event.preventDefault();
    setLoading(true);

    postRsvp({
      data: formState,
      onSuccess: () => {
        onSubmit();
        setLoading(false);
      },
      onError: () => {
        setLoading(false);
      },
    });
  };

  return (
    <form onSubmit={submitForm} ref={formRef}>
      <div className="flex flex-col px-4 py-3 sm:px-6 sm:py-8">
        <Stack gap={4}>
          <Dialog.Title as={Title}>RSVP</Dialog.Title>
          <Dialog.Description className="pt-2 pb-3">Quem vem prá festa?</Dialog.Description>
          <FormField
            name="email"
            id="email"
            type="email"
            label="Email"
            value={email}
            onChange={onEmailChange}
            disabled={loading}
            required
            autoFocus
          />

          <AdultsSelect entries={adults} add={addAdult} remove={removeAdult} update={updateAdult} />

          <ChildrenSelect
            entries={children}
            add={addChild}
            remove={removeChild}
            update={updateChild}
          />

          <div className="mt-8">
            <FormField
              name="comments"
              id="comments"
              type="text"
              value={comments}
              onChange={onCommentsChange}
              label="Comentários adicionais ou palavras especiais aos noivos?"
              disabled={loading}
            />
          </div>
        </Stack>
      </div>
      <div className="flex bg-gray-100 px-4 py-5 sm:px-6 sm:py-8 mt-5 justify-between">
        <Button type="button" onClick={onClose} variant="outline">
          Cancelar
        </Button>

        <Button type="submit" onClick={submitForm} disabled={loading}>
          <Stack direction="row" gap={2} itemsCenter>
            <span>{loading ? 'Enviando' : 'Enviar'}</span>
            {loading && <BeatLoader color="#ffffff" size={3} />}
          </Stack>
        </Button>
      </div>
    </form>
  );
}

Form.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
