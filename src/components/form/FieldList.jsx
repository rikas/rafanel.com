import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/solid';
import IconButton from './IconButton';
import Title from '../Title';

const FieldList = ({ title, count, add, remove, children }) => {
  return (
    <>
      <div className="flex items-center gap-3 mt-8 mb-4">
        <Title variant="h4" className="text-slate-500">
          {title}
        </Title>

        <IconButton onClick={remove} disabled={count === 0}>
          <MinusSmallIcon className="h-6 w-6" />
        </IconButton>

        <span className="text-xl text-slate-600 px-2">{count}</span>

        <IconButton onClick={add} disabled={count === 5}>
          <PlusSmallIcon className="h-6 w-6" />
        </IconButton>
      </div>
      <div className="flex flex-col gap-5">{children}</div>
    </>
  );
};

export default FieldList;
