import React from 'react';
import { Link } from 'react-router-dom';
import budanovImage from '../9d540be-0c25df3-budanov690.jpg';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 10vh;
`;

const Heading = styled.h1`
  font-size: 2em;
`;

const Image = styled.img`
  width: 100%;
  max-width: 900px;
  margin: 20px 0;
`;

const Subheading = styled.h2`
  font-size: 1.5em;
`;

const LinkText = styled.b`
  display: block;
  margin-top: 10px;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Heading>This page not found</Heading>
      <Image src={budanovImage} alt="Budanov" />
      <Subheading>As they say, a three-letter word - "УВЫ"</Subheading>
      <LinkText>
        Please use this <Link to="/">link</Link> to navigate to our Home page
      </LinkText>
    </NotFoundContainer>
  );
};

export default NotFound;
