import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/molecules/HeaderSection/Navbar';
import Footer from 'components/organisms/Footer';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

const PageTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  </>
);

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default PageTemplate;
