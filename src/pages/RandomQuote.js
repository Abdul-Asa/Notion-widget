import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  VStack,
  Text,
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
import { useInView } from 'framer-motion';
import SnapContainer from '../components/SnapContainer';
import { getRandomQuote } from '../utils/quotable.api';
const RandomQuote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const transition = 'opacity 1.8s';
  const [quote, setquote] = useState('');
  const shuffle = () => {
    getRandomQuote().then(res => {
      setquote(res);
    });
  };
  useEffect(() => {
    shuffle();
  }, []);

  return (
    <Box h="100vh" overflowY={'scroll'} scrollSnapType="y mandatory">
      <SnapContainer>
        <Flex justify={'flex-end'}>
          <ColorModeSwitcher />
        </Flex>
        <Stack
          align={'center'}
          justifyContent="center"
          h="80%"
          opacity={isInView ? 1 : 0}
          transition={transition}
        >
          <Heading>Generate quote </Heading>
          <Heading size={'md'}>{quote?.content}</Heading>
          <Text>{quote?.author}</Text>
          <Button onClick={shuffle}>Shuffle</Button>
        </Stack>
      </SnapContainer>
    </Box>
  );
};

export default RandomQuote;
