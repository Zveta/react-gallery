import React from 'react';
import { node } from 'prop-types';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout = ({ children }) => (
  <>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
  </>
);

Layout.propTypes = {
  children: node.isRequired
};

export default Layout;
