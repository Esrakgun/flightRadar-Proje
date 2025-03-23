
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Map from './pages/Map';
import List from './pages/List';
import { useDispatch} from 'react-redux';
import { getFlight } from './redux/actions';
import Header from './components/header';
import Modal from './components/modal';






const App = () => {
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlight());
  }, []);

  return (
    <BrowserRouter>
   <Header/>
    <Routes>
    <Route path="/" element={<Map />} />
    <Route path="/list" element={<List />} />
    </Routes>
   
   <Modal/>
    </BrowserRouter>
  );

};

export default App;
