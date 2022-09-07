import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Grid,
  Button,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/IconButtons';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  signupFunction,
  loginFunction,
  authentication,
} from '../utils/firebase.auth';
const Entry = ({ type }) => {
  const [user, loading, error] = useAuthState(authentication);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const handleChange = e => {
    const { value, name } = e.target;
    setForm(el => {
      return { ...el, [name]: value };
    });
  };
  const onLogin = form => {
    const data = loginFunction(form);
    data
      .then(response => {
        if (response.user) {
          navigate('/welcome');
        }
        console.log(response.user.emailVerified);
      })
      .catch(error => {
        console.log(error, error.code);
        if (error.code === 'auth/wrong-password') {
          console.log('Wrong Password');
        }
        if (error.code === 'auth/user-not-found') {
          console.log('Email not registered');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('Please check the Email');
        }
        if (error.code === 'auth/internal-error') {
          console.log('Please fill in the form correctly');
        }
        if (error.code === 'auth/user-disabled') {
          console.log('Your account has been disabled');
        }
      });
  };
  const onSignup = form => {
    const data = signupFunction(form);
    data
      .then(response => {
        if (response.user) {
          navigate('/welcome');
        }
        console.log(response.user.emailVerified);
      })
      .catch(error => {
        console.log(error, error.code);
        if (error.code === 'auth/invalid-email') {
          console.log('Please check the Email');
        }
        if (error.code === 'auth/internal-error') {
          console.log('Please fill in the form correctly');
        }
        if (error.code === 'auth/user-disabled') {
          console.log('Your account has been disabled');
        }
        if (error.code === 'auth/weak-password') {
          console.log('Your password is to weak');
        }
        if (error.code === 'auth/email-already-in-use') {
          console.log('This email already exists');
        }
      });
  };
  useEffect(() => {
    if (user) navigate('/welcome');
    if (error) console.log(error);
  }, [user, error, navigate]);

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8} w={['90%', '50%']} justifySelf="center">
          <Heading>{type}</Heading>
          <Input
            type={'email'}
            maxW="300px"
            placeholder="test@gmail.com"
            name="email"
            autoComplete={'false'}
            onChange={handleChange}
          />
          <Input
            type={'password'}
            maxW="300px"
            placeholder="* * * * * *"
            name="password"
            autoComplete={'false'}
            onChange={handleChange}
          />

          <Button
            isLoading={loading}
            onClick={
              type === 'Login' ? () => onLogin(form) : () => onSignup(form)
            }
          >
            {type === 'Login' ? 'Login' : 'Sign up'}
          </Button>
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
