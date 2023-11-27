import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const headerStyle = {
  backgroundColor: '#333',
  padding: '10px 0',
};

export const ulStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
};

export const liStyle = {
  marginRight: '20px',
};

export const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
};

export const mainStyle = {
  padding: '20px',
};