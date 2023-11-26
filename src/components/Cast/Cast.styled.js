import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  min-height: 450px;
  margin: -15px;
`;
export const CastItem = styled.li`
  width: 200px;
  margin: 15px;
`;
export const CastImage = styled.img`
  height: 300px;
  overflow: hidden;
  object-fit: cover;
`;
export const CastName = styled.h3`
  font-size: 18px;
  letter-spacing: 0.2em;
`;
export const CastCharacter = styled.p`
  font-size: 15px;
`;
