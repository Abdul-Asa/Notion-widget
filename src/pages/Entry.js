import React, { useState, useEffect } from 'react';
import {
  Box,
  useMediaQuery,
  Image,
  Button,
  Heading,
  Input,
  Text,
  Stack,
  Flex,
  FormLabel,
  FormControl,
  useColorModeValue,
  Checkbox,
} from '@chakra-ui/react';
// import { ColorModeSwitcher, Icon2 } from '../components/IconButtons';
import { FiArrowUpRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  signupFunction,
  loginFunction,
  authentication,
} from '../utils/firebase.auth';
import Header from '../components/Header';
import SnapContainer from '../components/SnapContainer';
import Img3 from '../components/Images/Img3.png';
import ImgInv from '../components/Images/InvImg3.png';

const Entry = ({ type }) => {
  const [isLaptopSize] = useMediaQuery(['(min-width: 1023px)']);
  const [message, setmessage] = useState('');
  const svg = useColorModeValue(Img3, ImgInv);
  const color = useColorModeValue('black', 'white');
  const [user, loading, error] = useAuthState(authentication);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const validateForm = () => {
    return form.password.length >= 6 && form.email.match(validRegex);
  };
  const handleChange = e => {
    e.preventDefault();
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
          setmessage('This feature has not been added yet');
        }
        console.log(response.user.emailVerified);
      })
      .catch(error => {
        console.log(error, error.code);
        if (error.code === 'auth/wrong-password') {
          setmessage('Wrong Password');
        }
        if (error.code === 'auth/user-not-found') {
          setmessage('Email not registered');
        }
        if (error.code === 'auth/invalid-email') {
          setmessage('Please check the Email');
        }
        if (error.code === 'auth/internal-error') {
          setmessage('Please fill in the form correctly');
        }
        if (error.code === 'auth/user-disabled') {
          setmessage('Your account has been disabled');
        }
      });
  };
  const onSignup = form => {
    const data = signupFunction(form);
    data
      .then(response => {
        if (response.user) {
          setmessage('This feature has not been added yet');
        }
        console.log(response.user.emailVerified);
      })
      .catch(error => {
        console.log(error, error.code);
        if (error.code === 'auth/invalid-email') {
          setmessage('Please check the Email');
        }
        if (error.code === 'auth/internal-error') {
          setmessage('Please fill in the form correctly');
        }
        if (error.code === 'auth/user-disabled') {
          setmessage('Your account has been disabled');
        }
        if (error.code === 'auth/weak-password') {
          setmessage('Your password is to weak');
        }
        if (error.code === 'auth/email-already-in-use') {
          setmessage('This email has already been registered');
        }
      });
  };
  useEffect(() => {
    if (user) console.log(user);
    if (error) console.log(error);
  }, [user, error, navigate]);

  return (
    <Box fontSize="xl">
      <Header />
      <SnapContainer>
        <Stack
          spacing={8}
          w={'full'}
          h="full"
          // bg="brown"
          px={['8', '12', '20%']}
          // pt={['16', 20]}
          justify={'center'}
        >
          {' '}
          <Flex
            justify={['space-between']}
            direction={['column', 'column', 'row']}
            // bg="red"
            h="80%"
            align={'center'}
          >
            <Stack w={['full', 'full', '60%']} spacing={4}>
              <Heading pb={[0, 6]} fontSize={['2xl', '2xl', '4xl']}>
                {type === 'Login' ? '🚪' : '📬'} {type}
              </Heading>
              <FormControl>
                <FormLabel pl="1">Email:</FormLabel>
                <Input
                  value={form.email}
                  type={'email'}
                  rounded={'none'}
                  maxW="300px"
                  placeholder="test@gmail.com"
                  name="email"
                  autoComplete={'false'}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel pl="1">Password:</FormLabel>
                <Input
                  value={form.password}
                  rounded={'none'}
                  type={'password'}
                  maxW="300px"
                  placeholder="* * * * * *"
                  name="password"
                  autoComplete={'false'}
                  onChange={handleChange}
                />
              </FormControl>
              <Stack pt="2" spacing={'4'}>
                <Checkbox
                  isChecked={form.email.match(validRegex) ? true : false}
                  isReadOnly
                  _checked={{
                    textDecoration: 'line-through',
                    opacity: 0.375,
                  }}
                >
                  <Text fontSize={['12px', '12px', '16px']}>
                    Valid Email Format
                  </Text>
                </Checkbox>
                <Checkbox
                  isChecked={form.password.length >= 6 ? true : false}
                  isReadOnly
                  _checked={{
                    textDecoration: 'line-through',
                    opacity: 0.375,
                  }}
                >
                  <Text fontSize={['12px', '12px', '16px']}>
                    Password must be longer than 6 characters
                  </Text>
                </Checkbox>
                <Flex
                  visibility={message ? 'visible' : 'hidden'}
                  align="center"
                  p={1}
                  bg="rgb(251 243 219)"
                  w="75%"
                >
                  <span>⚠️</span>
                  <Text pl="3" fontSize={['12px', '12px', '16px']}>
                    {message}
                  </Text>
                </Flex>
              </Stack>
              <Button
                disabled={!validateForm()}
                w="60%"
                isLoading={loading}
                onClick={
                  type === 'Login' ? () => onLogin(form) : () => onSignup(form)
                }
              >
                {type === 'Login' ? 'Login' : 'Sign up'}
              </Button>
              <Text pl={[0, '3']} fontSize={['12px', '12px', '18px']}>
                {' '}
                {type === 'Login'
                  ? "Don't have an account?"
                  : 'Have an account?'}
                <Button
                  variant={'link'}
                  ml={3}
                  leftIcon={<FiArrowUpRight color={color} />}
                  textDecor="underline"
                  textColor={color}
                  onClick={
                    type === 'Login'
                      ? () => {
                          navigate('/signup');
                          if (form.email || form.password)
                            setForm({ email: '', password: '' });
                          if (message) setmessage('');
                        }
                      : () => {
                          navigate('/login');
                          if (form.email || form.password)
                            setForm({ email: '', password: '' });
                          if (message) setmessage('');
                        }
                  }
                >
                  {type === 'Login' ? 'Sign up' : 'Login'}
                </Button>
              </Text>
            </Stack>
            {isLaptopSize && (
              <Image
                src={svg}
                pt="4"
                boxSize="sm"
                // width={'46'}
                // justifySelf={'center'}
                // alignSelf="center"
              />
            )}
          </Flex>
        </Stack>
      </SnapContainer>
    </Box>
  );
};

export default Entry;
