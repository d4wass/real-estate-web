import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import Header from 'components/organisms/Header';
import Cards from 'components/organisms/Cards';
import CardsOffer from 'components/organisms/CardsOffer';
import Adventages from 'components/organisms/Adventages';
import Contact from 'components/organisms/Contact';

const Home = () => {
  return (
    <PageTemplate>
      <Header />
      <Cards />
      <CardsOffer />
      <Adventages />
      <Contact />
    </PageTemplate>
  );
};

export default Home;
