import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Form from './form/Form';
import PropTypes from 'prop-types';
import Thanks from './Thanks';

const FormDialog = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
            <Dialog.Panel className="fixed w-full max-w-xl bg-white max-h-full overflow-y-auto">
              {isSubmitted ? (
                <Thanks />
              ) : (
                <Form onClose={onClose} onSubmit={() => setIsSubmitted(true)} />
              )}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

FormDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FormDialog;
