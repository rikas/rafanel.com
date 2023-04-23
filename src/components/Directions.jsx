import { MapPinIcon } from '@heroicons/react/24/solid';

const Directions = () => {
  return (
    <a
      href="https://goo.gl/maps/nG7VrJEo5EnrDPbB6"
      className="inline-flex items-center gap-1 mt-2 bg-slate-200 hover:bg-slate-300 py-2 px-5"
      title="Direções"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MapPinIcon className="w-6 h-6" /> Direções
    </a>
  );
};

export default Directions;
