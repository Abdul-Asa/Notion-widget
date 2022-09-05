import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Entry from '../pages/Entry';
import Home from '../pages/Home';
// import Welcome from '../pages/Welcome';
// import NameInput from '../pages/NameInput';
// import Home from '../pages/Home';
// import Canvas from '../pages/Canvas';
// import HighScore from '../pages/HighScore';
// import PlayGround from '../pages/PlayGround';
// import Help from '../pages/Help';

const RoutesJs = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Entry type={'Signup'} />}></Route>
      <Route path="/login" element={<Entry type={'Login'} />}></Route>
    </Routes>
  );
};

export default RoutesJs;
