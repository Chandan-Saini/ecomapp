import React from 'react';
import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import Router from './router';

function App() {
  return (
    <div>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
