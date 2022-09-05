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
  Text,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';
// import { Logo } from './Logo';

const Entry = ({ type }) => {
  const navigate = useNavigate();
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8} w={['90%', '50%']} justifySelf="center">
          <Heading>{type}</Heading>
          <Input type={'email'} maxW="300px" placeholder="test@gmail.com" />
          <Button>{type === 'Login' ? 'Login' : 'Sign up'}</Button>
          <Text>
            {type === 'Login' ? "Don't have an account?" : 'Have an account?'}
            <Button
              variant={'link'}
              pl={3}
              onClick={
                type === 'Login'
                  ? () => navigate('/signup')
                  : () => navigate('/login')
              }
            >
              {!type === 'Login' ? 'Login' : 'Sign up'}
            </Button>
          </Text>
        </VStack>
        <Button variant={'link'} pl={3} onClick={() => navigate('/')}>
          Back
        </Button>
      </Grid>
    </Box>
  );
};

export default Entry;
