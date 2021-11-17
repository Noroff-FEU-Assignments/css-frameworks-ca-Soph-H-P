import React from 'react';

import Container from 'react-bootstrap/Container';

import { HeroSection } from '../components/HeroSection';
import { IntroTextHome } from '../components/IntroTextHome';
import { AccordionContent } from '../components/AccordionContent';
import { TabsContent } from '../components/TabsContent';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <IntroTextHome />
      <Container>
        <AccordionContent />
        <TabsContent />
      </Container>
    </main>
  );
};

export default Home;
