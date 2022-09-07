import React from 'react';
import { Box } from '@chakra-ui/react';

// import { Logo } from './Logo';

const SnapContainer = ({ children, ...props }) => {
  return (
    <Box h="100vh" w="100%" scrollSnapAlign="end" {...props}>
      {children}
    </Box>
  );
};

export default SnapContainer;
