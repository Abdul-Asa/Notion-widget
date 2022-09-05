import React, { useState } from 'react';
import {
  Box,
  VStack,
  Grid,
  theme,
  Button,
  Heading,
  Input,
  HStack,
  Flex,
  Stack,
  Center,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';
import SnapContainer from '../components/SnapContainer';

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      textAlign="center"
      fontSize="xl"
      h="100vh"
      overflowY={'scroll'}
      scrollSnapType="y mandatory"
    >
      <SnapContainer bg="brown">
        <Flex justify={'flex-end'}>
          <ColorModeSwitcher />
        </Flex>
        <Stack align={'center'} justifyContent="center" h="80%">
          <Heading>Home</Heading>
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/signup')}>Signup</Button>
        </Stack>
      </SnapContainer>
      <SnapContainer bg="orange">
        <Flex justify={'flex-end'}>
          <ColorModeSwitcher />
        </Flex>
        <Stack align={'center'} justifyContent="center" h="80%">
          <Heading>Home2</Heading>
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/signup')}>Signup</Button>
        </Stack>
      </SnapContainer>
      <SnapContainer bg="teal">
        <Flex justify={'flex-end'}>
          <ColorModeSwitcher />
        </Flex>
        <Stack align={'center'} justifyContent="center" h="80%">
          <Heading>Home3</Heading>
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/signup')}>Signup</Button>
        </Stack>
      </SnapContainer>
    </Box>
  );
}

export default Home;
