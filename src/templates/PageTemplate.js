import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/molecules/HeaderSection/Navbar';
import Footer from 'components/organisms/Footer';
import GlobalStyle from 'theme/GlobalStyle';

const PageTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    {children}
    <Footer />
  </>
);

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default PageTemplate;
