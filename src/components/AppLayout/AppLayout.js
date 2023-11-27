import React from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from '../GlobalStyle';
import {
  Layout,
  headerStyle,
  liStyle,
  linkStyle,
  mainStyle,
  ulStyle,
} from './Layout';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

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
