import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export const Li = styled.li`
  list-style: none;
  padding: 15px;
  margin: 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  text-align: center;
  width: 200px;
  height: 355px;

  :hover {
    scale: 1.1;
  }
`;

export const Img = styled.img`
  width: 250px;
`;

export const PosterTitle = styled.p`
  font-size: 20px;
`;
