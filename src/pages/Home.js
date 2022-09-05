import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Button,
  Heading,
  Input,
  HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
// import { Logo } from './Logo';

function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8} w={['90%', '50%']} justifySelf="center">
            <Heading>Logged out</Heading>
            <Input type={'email'} maxW="300px" placeholder="test@gmail.com" />
            <HStack spacing={4}>
              <Button>Login</Button> <Button>Sign up</Button>
            </HStack>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
