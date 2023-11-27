import React from 'react';
import { Link } from 'react-router-dom';
import budanovImage from '../../9d540be-0c25df3-budanov690.jpg';
import {
  Heading,
  Image,
  LinkText,
  NotFoundContainer,
  Subheading,
} from './NotFoundPage.styled';

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
