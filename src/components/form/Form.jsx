import { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@headlessui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BeatLoader } from 'react-spinners';

import postRsvp from '../../googleSheets';
import AdultsSelect from './AdultsSelect';
import FormField from './FormField';
import Stack from '../Stack';
import Title from '../Title';
import ChildrenSelect from './ChildrenSelect';
import Button from '../Button';
import formSchema from './formSchema';

function Form({ onClose, onSubmit }) {
  const [loading, setLoading] = useState(false);

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: '',
      adults: [],
      children: [],
      comments: '',
    },
  });

  const submitForm = () => {
    setLoading(true);
    postRsvp({
      data: methods.watch(),
      onSuccess: () => {
        onSubmit();
        setLoading(false);
      },
      onError: () => {
        setLoading(false);
      },
    });
  };

  const {
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitForm)}>
        <div className="flex flex-col px-4 py-3 sm:px-6 sm:py-8">
          <Stack>
            <Dialog.Title as={Title}>RSVP</Dialog.Title>
            <Dialog.Description className="pt-2 pb-3">Quem vem prá festa?</Dialog.Description>

            <FormField
              name="email"
              id="email"
              type="email"
              label="Email"
              disabled={loading}
              error={errors.email} // This is just to force a re-render!
              required
            />

            <AdultsSelect />
            <ChildrenSelect />

            <div className="mt-8">
              <FormField
                name="comments"
                id="comments"
                type="text"
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

          <Button type="submit" disabled={loading}>
            <Stack direction="row" gap={2} itemsCenter>
              <span>{loading ? 'Enviando' : 'Enviar'}</span>
              {loading && <BeatLoader color="#ffffff" size={3} />}
            </Stack>
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

Form.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
