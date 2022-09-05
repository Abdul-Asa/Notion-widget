import React, { Children, useState } from 'react';
import {
  Box,
  VStack,
  Grid,
  theme,
  Button,
  Heading,
  Input,
  HStack,
  Text,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';
// import { Logo } from './Logo';

const SnapContainer = ({ children, ...props }) => {
  return (
    <Box h="100vh" w="100%" p={4} scrollSnapAlign="end" {...props}>
      {children}
    </Box>
  );
};

export default SnapContainer;
