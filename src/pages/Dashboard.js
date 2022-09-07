import React, { useEffect, useState, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { authentication, logout } from '../utils/firebase.auth';
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
import { ColorModeSwitcher } from '../components/IconButtons';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'framer-motion';
import SnapContainer from '../components/SnapContainer';

const Dashboard = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const transition = 'opacity 1.8s';
  const [user, loading, error] = useAuthState(authentication);
  const [name, setName] = useState('');

  useEffect(() => {
    if (loading) return console.log('loading...');
    if (!user) return navigate('/');
    setName(user.email);
  }, [user, loading, name]);

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
          ref={ref}
        >
          <Heading>Dashboard</Heading>
          <Heading>Welcome {user?.email}</Heading>

          <Button onClick={logout}>Log out</Button>
        </Stack>
      </SnapContainer>
    </Box>
  );
};

export default Dashboard;
