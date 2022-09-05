import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
    </Routes>
  );
};

export default RoutesJs;
