import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import ListFood from './components/ListFood/ListFood';
import Footer from './components/Footer/Footer';
import Index from './routes/index.jsx';
import Details from './components/Details/Details.jsx';

export default function App() {
  return (
    <>
    <div id='container'>
      <Header />
      <Navigation />
      <Details />
      <Index/>
      <ListFood />
      <Footer />
    </div>
    </>
  );
}
