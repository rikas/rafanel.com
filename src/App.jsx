import { useEffect } from 'react';
import './app.scss';
import construction from './bonecos.webp';

const App = () => {
  return (
    <div className="container">
      <div className="items">
        <h1>É desta!</h1>
        <img src={construction} alt="construction" />
        <h3>5 de Outubro 2023, Convento de Sandelgas</h3>
      </div>
    </div>
  );
};

export default App;
