import styled from 'styled-components';

export const DetailsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MovieImage = styled.img`
  height: auto;
  max-width: 300px;
  height: auto;
  margin-right: 20px;
`;

export const MovieTitle = styled.h2`
  margin: 10px 0;
`;

export const Score = styled.p`
  margin: 5px 0;
`;

export const Overview = styled.span`
  margin: 10px 0;
`;

export const Genres = styled.span`
  margin: 10px 0;
`;

export const AdditionalInfo = styled.div`
  margin-top: 20px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const InfoHeading = styled.h3`
  margin-bottom: 10px;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px;
`;

export const InfoItem = styled.li`
  margin-bottom: 10px;
`;
