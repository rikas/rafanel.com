import { useState } from 'react';

import './app.css';

import Title from './components/Title';
import Paragraph from './components/Paragraph';
import PageContainer from './components/PageContainer';
import Button from './components/Button';
import FormDialog from './components/FormDialog';
import Stack from './components/Stack';
import Directions from './components/Directions';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageContainer>
        <div className="flex flex-col mb-10 min-w-xl gap-5 md:gap-10 lg:basis-1/2">
          <Title bold>É desta.</Title>

          <div className="mt-5 md:mt-8">
            <Paragraph>Junto com os seus pais,</Paragraph>
            <Paragraph>Graça Correia e Valdemar Barreiros,</Paragraph>
            <Paragraph>Isabel Rodrigues e José Álvaro Santos</Paragraph>
            <Paragraph>e com o filho Francisco,</Paragraph>
          </div>

          <div>
            <Title>Maria Manuel</Title>
            <Title>& Rafael</Title>
          </div>

          <div>
            <Paragraph>convidam para a celebração do seu casamento,</Paragraph>
            <Paragraph>no Convento de Sandelgas,</Paragraph>
            <Paragraph>Rua do Convento, nº 8,</Paragraph>
            <Paragraph>Sandelgas, 3025-474 Coimbra,</Paragraph>
            <Paragraph>pelas 15h30, de 5ª feira, dia</Paragraph>
            <Paragraph>5 de outubro de 2023.</Paragraph>
            <Directions />
          </div>

          <div className="mt-10 md:mt-8">
            <Title bold>Vinde Prá Festa.</Title>
          </div>

          <div className="mt-5 md:mt-8">
            <Paragraph>RSVP até dia 20 de agosto</Paragraph>
            <Paragraph>913433938 (nel) ou 910624818 (rafa).</Paragraph>
          </div>
        </div>

        <div className="flex flex-col justify-start sm:basis-1/2 lg:px-5">
          <img src="/rafanel.jpeg" className="w-100 mb-10" alt="Rafa e Nel" />
          <Stack gap={7}>
            <Title bold>RSVP</Title>

            <Button fullWidth onClick={() => setModalOpen(true)}>
              <Title className="px-5 py-2">Quero ir</Title>
            </Button>

            <Paragraph size="sm">
              A vossa presença é importante para nós. Como sabem já vivemos juntos e por essa razão
              não necessitamos de nada para a nossa habitação. Assim, agradecemos a vossa
              contribuição para a nossa vida em conjunto, pelo IBAN:
            </Paragraph>

            <Paragraph size="sm" component="pre">
              PT50 0023 0000 4564 9074 1659
            </Paragraph>
          </Stack>
        </div>
      </PageContainer>
      <FormDialog isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default App;
