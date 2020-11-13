import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FooterLink from 'components/atoms/FooterLink';
import Title from 'components/atoms/Title';
import { breakpoints } from 'theme/mainTheme';

const StyledContentWrapper = styled.div`
  display: none;

  @media ${breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    width: 25%;
  }
`;

const StyledTitle = styled(Title)`
  font-size: 2.5rem;
`;

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const FooterNavigation = ({ navItems }) => {
  const { title, links } = navItems;

  return (
    <StyledContentWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {links.map((item) => (
          <FooterLink key={item.key}>{item.name}</FooterLink>
        ))}
      </StyledList>
    </StyledContentWrapper>
  );
};

FooterNavigation.propTypes = {
  navItems: PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.number,
        name: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default FooterNavigation;
