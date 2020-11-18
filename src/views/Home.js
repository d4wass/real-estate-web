import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import Header from 'components/organisms/Header';
import Cards from 'components/organisms/Cards';
import CardsOffer from 'components/organisms/CardsOffer';
import Adventages from 'components/organisms/Adventages';
import Contact from 'components/organisms/Contact';

const Home = () => (
  <PageTemplate>
    <>
      <Header className="section" />
      <Cards className="section" />
      <CardsOffer className="offer-section" />
      <Adventages className="section" />
      <Contact className="section" />
    </>
  </PageTemplate>
);

export default Home;
