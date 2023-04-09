import PropTypes from 'prop-types';
import Button from './Button';
import Title from './Title';

const Thanks = ({ onClose }) => (
  <div>
    <div className="p-4">
      <Title variant="h3">Obrigado pela vossa presença!</Title>
    </div>

    <div className="flex bg-gray-100 px-4 py-5 sm:px-6 sm:py-8 mt-5 justify-end">
      <Button type="button" onClick={onClose} variant="outline">
        Fechar
      </Button>
    </div>
  </div>
);

Thanks.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Thanks;
