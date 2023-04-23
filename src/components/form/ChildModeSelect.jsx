import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

import Stack from '../Stack';

export const Modes = {
  ALL: 'ceremony-and-party',
  CEREMONY: 'ceremony-only',
};

const ChildModeSelect = ({ index }) => {
  const name = `children.${index}.mode`;
  const { register, getFieldState } = useFormContext();
  const { invalid, error } = getFieldState(name);

  return (
    <Stack gap={1}>
      <Stack direction="row" gap={5} className="mt-2">
        <Stack direction="row" itemsCenter>
          <input
            type="radio"
            id={`${name}-opt1`}
            className="cursor-pointer"
            value={Modes.CEREMONY}
            {...register(name)}
          />
          <label htmlFor={`${name}-opt1`} className="cursor-pointer pl-2">
            Apenas cerimónia
          </label>
        </Stack>

        <Stack direction="row" itemsCenter>
          <input
            type="radio"
            id={`${name}-opt2`}
            className="cursor-pointer"
            value={Modes.ALL}
            {...register(name)}
          />
          <label htmlFor={`${name}-opt2`} className="cursor-pointer pl-2">
            Jantar e festa
          </label>
        </Stack>
      </Stack>
      {invalid && <small className="text-red-500">{error.message}</small>}
    </Stack>
  );
};

ChildModeSelect.propTypes = {
  index: PropTypes.number.isRequired,
};

export default ChildModeSelect;
