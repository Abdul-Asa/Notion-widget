import React, { useEffect, useRef } from 'react';
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
// import { useScroll, motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import SnapContainer from '../components/SnapContainer';

function Home() {
  const navigate = useNavigate();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const transition = 'opacity 1.8s';

  return (
    <Box
      textAlign="center"
      fontSize="xl"
      h="100vh"
      overflowY={'scroll'}
      scrollSnapType="y mandatory"
    >
      <SnapContainer
      // bgGradient="linear(to-br,  #FF0080, #7928CA)"
      >
        <Flex justify={'flex-end'}>
          <ColorModeSwitcher />
        </Flex>
        <Stack
          align={'center'}
          justifyContent="center"
          h="80%"
          opacity={isInView ? 1 : 0}
          transition={transition}
          ref={ref1}
        >
          <Heading>Home</Heading>
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/signup')}>Signup</Button>
        </Stack>
      </SnapContainer>
      <SnapContainer
      // bgGradient="linear(to-bl, #7928CA, #FF0080)"
      >
        <Stack
          align={'center'}
          justifyContent="center"
          h="80%"
          opacity={isInView2 ? 1 : 0}
          transition={transition}
          ref={ref2}
        >
          <Heading>Home2</Heading>
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/generate-quote')}>
            Generate Random Quote
          </Button>
        </Stack>
      </SnapContainer>
      <SnapContainer
      // bgGradient="linear(to-br, #FF0080, #7928CA)"
      >
        <Stack
          align={'center'}
          justifyContent="center"
          h="80%"
          opacity={isInView3 ? 1 : 0}
          transition={transition}
          ref={ref3}
        >
          <Heading>Home3</Heading>
          <Button onClick={() => navigate('/login')}>Login</Button>
          {/* <Button onClick={() => navigate('/signup')}>Signup</Button> */}
        </Stack>
      </SnapContainer>
    </Box>
  );
}

export default Home;
