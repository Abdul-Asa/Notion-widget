import React from 'react';
// import theme from './Theme';
import { ChakraProvider, theme } from '@chakra-ui/react';
// import Spinner from './components/Elements/Spinner';
import { BrowserRouter } from 'react-router-dom';
import RoutesJs from './routes/RouteList';
// import { AnimatePresence } from 'framer-motion';
// import useSound from 'use-sound';
// import audio from './components/Sounds/audio.mp3';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <RoutesJs />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
