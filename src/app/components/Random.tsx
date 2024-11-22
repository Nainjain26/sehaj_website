"use client"
import React, { useState, ReactNode } from 'react';
import Alert from './Alert';
import Navbar from './Navbar';
import Footer from './Footer';

interface RandomProps {
  children: ReactNode;
}

const Random: React.FC<RandomProps> = ({ children }) => {
  const [alert, setAlert] = useState(true);

  return (
    <>
      {alert && <Alert setAlert={setAlert} />}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Random;

