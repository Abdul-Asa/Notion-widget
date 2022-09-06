import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Entry from '../pages/Entry';
import GeneratedQuote from '../pages/GeneratedPage';
import Home from '../pages/Home';
import RandomQuote from '../pages/RandomQuote';

const RoutesJs = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Entry type={'Signup'} />}></Route>
      <Route path="/login" element={<Entry type={'Login'} />}></Route>
      <Route path="/welcome" element={<Dashboard />}></Route>
      <Route path="/generate-quote" element={<RandomQuote />}></Route>
      <Route
        path="/generate-quote/:styling"
        element={<GeneratedQuote />}
      ></Route>
    </Routes>
  );
};

export default RoutesJs;
