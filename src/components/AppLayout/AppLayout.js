import React from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from '../GlobalStyle';
import { Layout } from './Layout';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const headerStyle = {
  backgroundColor: '#333',
  padding: '10px 0',
};

const ulStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
};

const liStyle = {
  marginRight: '20px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
};

const mainStyle = {
  padding: '20px',
};

const AppLayout = () => {
  return (
    <Layout>
      <header style={headerStyle}>
        <nav>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <NavLink to="/" style={linkStyle}>
                Home
              </NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/movies" style={linkStyle}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main style={mainStyle}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
      <Toaster />
    </Layout>
  );
};

export default AppLayout;
