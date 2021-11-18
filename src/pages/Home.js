import React from 'react';

import Container from 'react-bootstrap/Container';

import { CarouselHero } from '../components/CarouselHero';
import { IntroTextHome } from '../components/IntroTextHome';
import { AccordionContent } from '../components/AccordionContent';
import { TabsContent } from '../components/TabsContent';

const Home = () => {
  return (
    <main>
      <CarouselHero />
      <IntroTextHome />
      <Container>
        <AccordionContent />
        <TabsContent />
      </Container>
    </main>
  );
};

export default Home;
