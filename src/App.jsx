import { useEffect } from 'react';
import './app.css';

import Title from './components/Title';
import Paragraph from './components/Paragraph';
import PageContainer from './components/PageContainer';
import Button from './components/Button';

const App = () => {
  return (
    <PageContainer>
      <div className="flex flex-col mb-10 min-w-xl gap-5 md:gap-10">
        <Title bold>É desta.</Title>

        <div className="mt-5 md:mt-10">
          <Paragraph>Junto com os seus pais,</Paragraph>
          <Paragraph>Isabel Rodrigues dos Santos e José Álvaro Rodrigues dos Santos,</Paragraph>
          <Paragraph>Graça Correia e Valdemar Barreiros,</Paragraph>
        </div>

        <div>
          <Title>Rafael &</Title>
          <Title>Maria Manuel,</Title>
        </div>

        <div>
          <Paragraph>convidam para a celebração do seu casamento,</Paragraph>
          <Paragraph>no Convento de Sandelgas,</Paragraph>
          <Paragraph>Rua do Convento, nº 8, Sandelgas, 3025-474 Coimbra,</Paragraph>
          <Paragraph>pelas 15h30, de 5ª feira, dia 5 de outubro de 2023.</Paragraph>
        </div>

        <div className="mt-10 md:mt-20">
          <Title bold>Vinde Prá Festa.</Title>
        </div>

        <div className="mt-5 md:mt-10">
          <Paragraph>RSVP até dia 20 de agosto, pelo site www.rafanel.com,</Paragraph>
          <Paragraph>ou para os nº 913433938 (Nel) ou nº 910624818 (Rafa).</Paragraph>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <Title bold>RSVP</Title>

        <div className="mt-8">
          <Button>
            <Title>Quero ir</Title>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default App;
