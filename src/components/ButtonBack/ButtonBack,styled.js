import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 5px;

  :hover {
    color: white;
    background-color: tomato;
  }
`;

export const LinkBack = styled(Link)`
  text-decoration: none;
`;
