import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f0f0f0;
  color: black;
  border-radius : .5rem;
  padding : 5%;
  margin-top : 30px;
  text-align: center;
  position : relative;
  bottom: 0;
  height: 100px;
  

`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
