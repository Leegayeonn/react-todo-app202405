import React from 'react';
import Header from './components/layout/Header';
import { Outlet, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';

const Main = () => {
  return (
    <div className='wrapper'>
      <Header />

      <div className='content-wrapper'>
        <Outlet /> {/* 경로에 따라서 */}
      </div>

      <Footer />
    </div>
  );
};

export default Main;
