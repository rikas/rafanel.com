import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';

import './app.css';

import Title from './components/Title';
import Paragraph from './components/Paragraph';
import PageContainer from './components/PageContainer';
import Button from './components/Button';
import FormDialog from './components/FormDialog';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <PageContainer>
      <div className="flex flex-col mb-10 min-w-xl gap-5 md:gap-10">
        <Title bold>É desta.</Title>

        <div className="mt-5 md:mt-8">
          <Paragraph>Junto com os seus pais,</Paragraph>
          <Paragraph>Graça Correia e Valdemar Barreiros,</Paragraph>
          <Paragraph>Isabel Rodrigues e José Álvaro Rodrigues Santos,</Paragraph>
        </div>

        <div>
          <Title>Maria Manuel</Title>
          <Title>& Rafael</Title>
        </div>

        <div>
          <Paragraph>convidam para a celebração do seu casamento,</Paragraph>
          <Paragraph>no Convento de Sandelgas,</Paragraph>
          <Paragraph>Rua do Convento, nº 8, Sandelgas,</Paragraph>
          <Paragraph>3025-474 Coimbra,</Paragraph>
          <Paragraph>pelas 15h30, de 5ª feira, dia 5 de outubro de 2023.</Paragraph>
        </div>

        <div className="mt-10 md:mt-8">
          <Title bold>Vinde Prá Festa.</Title>
        </div>

        <div className="mt-5 md:mt-8">
          <Paragraph>RSVP até dia 20 de agosto</Paragraph>
          <Paragraph>913433938 (nel) ou 910624818 (rafa).</Paragraph>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <Title bold>RSVP</Title>

        <div className="mt-8">
          <Button onClick={() => setModalOpen(true)}>
            <Title className="px-5 py-2">Quero ir</Title>
          </Button>
        </div>
      </div>
      <FormDialog isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </PageContainer>
  );
};

export default App;
