// import logo from './logo.svg';
// import './App.css';
import {NavigationBar}  from './components/NavigationBar';
import React from 'react';
import {Routes, Route} from 'react-router-dom'; 
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavigationBar />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bio' element={<Bio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Layout>
      
    </>
  );
}

export default App;
