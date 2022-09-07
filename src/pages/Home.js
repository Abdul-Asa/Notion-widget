import React, { useEffect, useRef } from 'react';
import {
  Box,
  useMediaQuery,
  Text,
  useColorModeValue,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Flex,
  Stack,
  Center,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { Icon1 } from '../components/IconButtons';
import { useNavigate } from 'react-router-dom';
import { BsChatSquareQuote, BsArrowDown } from 'react-icons/bs';
import { useInView, motion } from 'framer-motion';
import SnapContainer from '../components/SnapContainer';
import Header from '../components/Header';
import Img1 from '../components/Logos & Images/Img1.png';
import Img2 from '../components/Logos & Images/Img2.png';
// import Icon1 from '../components/Logos & Images/Icon1.svg';

function Home() {
  const [isPhoneSize, isLaptopSize] = useMediaQuery([
    '(max-width: 470px)',
    '(min-width: 1023px)',
  ]);
  const navigate = useNavigate();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const transition = 'opacity 1.8s';
  const color = useColorModeValue('black', 'white');
  const invColor = useColorModeValue('white', 'black');
  const colorPage = useColorModeValue('#f0e7df', '#f2d5b8');
  const callout = useColorModeValue('#f0e7df', '#252525');
  const card = useColorModeValue('rgb(228 228 227)', '#252525');

  return (
    <Box
      scrollBehavior={'smooth'}
      fontSize="xl"
      h="100vh"
      overflowY={'scroll'}
      scrollSnapType="y mandatory"
    >
      <Header />
      <SnapContainer id="slide1">
        <Stack
          h={'40%'}
          bg={colorPage}
          width={'full'}
          justifyContent="flex-end"
          position={'ab'}
          opacity={isInView ? 1 : 0}
          transition={transition}
          ref={ref1}
        >
          <Image
            pt="4"
            src={Img1}
            boxSize="40"
            width={'46'}
            justifySelf={'center'}
            alignSelf="center"
          />
          <Icon
            as={BsChatSquareQuote}
            position={'relative'}
            boxSize={['10', '16']}
            left={['10%', '22%']}
            bottom={'-11%'}
            zIndex="base"
            color={color}
          />
        </Stack>
        <Flex h={'60%'} direction={['column', 'row']} justify={'space-between'}>
          <Center h="full" pl={['0', '20%']} pt={['10', 0]}>
            <Stack maxW={'400px'} p={[8, 2]} textAlign={['center', 'start']}>
              <Heading fontSize={['2xl', '4xl']}>Notion Quote Widget </Heading>
              <Heading fontSize={['sm', 'xl']}>
                A website that generates random Quotes for Notion Widgets.
              </Heading>
              <Button
                variant={'outline'}
                textAlign="start"
                as={'a'}
                href="#slide2"
                w="fit-content"
                size={['sm', 'md']}
                rightIcon={<BsArrowDown />}
              >
                Get Started
              </Button>
            </Stack>
          </Center>
          {(isPhoneSize || isLaptopSize) && (
            <Flex position={'relative'} left={'2%'} justify="center">
              <Image
                position="relative"
                src={Img2}
                h={['200px', 'auto']}
                w={['300px', 'auto']}
              />
              <Stack
                position="absolute"
                bottom={[-4, '10%']}
                left={[4, 20]}
                p={6}
                textAlign="center"
                w={['90%', '70%']}
                border="1px solid black"
                bg={invColor}
                color={color}
                transform={['scale(0.5)', 'scale(1)']}
              >
                <Heading fontSize={'16px'}>
                  {'Indomitable Human Spirit > Cold Cruelty of the Universe'}{' '}
                </Heading>
                <Text fontSize={'8px'} alignSelf={'center'}>
                  - Humans
                </Text>
              </Stack>
            </Flex>
          )}
        </Flex>
      </SnapContainer>
      <SnapContainer id="slide2">
        <Stack
          align={'center'}
          justifyContent="center"
          h="full"
          px={['8', '12', '20%']}
          pt={['16', 20]}
          opacity={isInView2 ? 1 : 0}
          transition={transition}
          ref={ref2}
        >
          <Stack h="full" w="full">
            <Heading mb={4} fontSize={['2xl', '4xl']}>
              Links
            </Heading>{' '}
            <Stack bg={callout} direction="row" spacing={2} py={4} px={6}>
              <span style={{ fontSize: '16px' }}>💡 </span>
              <Text fontSize={['12px', '16px']}>
                You can either generate random quotes. However if you wish to
                use custom quotes of your own, you have to sign up
              </Text>
            </Stack>
            <Stack alignItems={'center'} direction="row" spacing={2} pt={8}>
              <Icon1 /> <Heading fontSize={['lg', 'xl']}>Board View</Heading>
            </Stack>
            <Divider />
            <Stack
              alignItems={'center'}
              direction={['column', 'row']}
              spacing={6}
              pt={8}
            >
              <motion.button
                whileHover={{ scale: 1.09 }}
                onClick={() => {
                  navigate('/generate-quote');
                }}
              >
                <Stack
                  w={['280px', '320px']}
                  h={['170px', '250px']}
                  boxShadow={'lg'}
                  rounded={'md'}
                  bg="white"
                >
                  <Flex justify={'center'} w="full" py={3} rounded={'md'}>
                    <Image boxSize={[20, 40]} src={Img1} rounded={'md'} />
                  </Flex>
                  <Box
                    h="full"
                    display={'flex'}
                    borderBottomRadius={'md'}
                    bg={card}
                    alignItems="center"
                    px={'8'}
                  >
                    <Heading fontSize={'lg'}>Random Quotes</Heading>
                  </Box>
                </Stack>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.09 }}
                onClick={() => {
                  navigate('/login');
                }}
              >
                <Stack
                  w={['280px', '320px']}
                  h={['170px', '250px']}
                  rounded={'md'}
                  bg="white"
                  boxShadow={'lg'}
                  // shadow={'xl'}
                >
                  <Flex justify={'center'} w="full" py={3} rounded={'md'}>
                    <Image boxSize={[20, 40]} src={Img1} rounded={'md'} />
                  </Flex>
                  <Box
                    h="full"
                    display={'flex'}
                    borderBottomRadius={'md'}
                    bg={card}
                    alignItems="center"
                    px={'8'}
                  >
                    <Heading fontSize={'lg'}>Customized Quotes</Heading>
                  </Box>
                </Stack>
              </motion.button>
            </Stack>
          </Stack>

          {/* <Heading>Home2</Heading>
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/generate-quote')}>
            Generate Random Quote
          </Button> */}
        </Stack>
      </SnapContainer>
      <SnapContainer
        // bgGradient="linear(to-br, #FF0080, #7928CA)"
        id="slide3"
      >
        <Stack
          align={'center'}
          justifyContent="center"
          h="full"
          px={['8', '12', '20%']}
          pt={['16', 20]}
          opacity={isInView3 ? 1 : 0}
          transition={transition}
          ref={ref3}
        >
          <Stack h="full" w="full">
            <Heading mb={4} fontSize={['2xl', '4xl']}>
              Show some Love ❤️
            </Heading>{' '}
            <Stack bg={callout} direction="row" spacing={2} py={4} px={6}>
              <span style={{ fontSize: '16px' }}>💡 </span>
              <Text fontSize={['12px', '16px']}>
                You can either generate random quotes. However if you wish to
                use custom quotes of your own, you have to sign up
              </Text>
            </Stack>
            <Stack alignItems={'center'} direction="row" spacing={2} pt={8}>
              <Icon1 /> <Heading fontSize={['lg', 'xl']}>Board View</Heading>
            </Stack>
            <Divider />
            <Stack
              alignItems={'center'}
              direction={['column', 'row']}
              spacing={6}
              pt={8}
            >
              <motion.button
                whileHover={{ scale: 1.09 }}
                onClick={() => {
                  navigate('/generate-quote');
                }}
              >
                <Stack
                  w={['280px', '320px']}
                  h={['170px', '250px']}
                  boxShadow={'lg'}
                  rounded={'md'}
                  bg="white"
                >
                  <Flex justify={'center'} w="full" py={3} rounded={'md'}>
                    <Image boxSize={[20, 40]} src={Img1} rounded={'md'} />
                  </Flex>
                  <Box
                    h="full"
                    display={'flex'}
                    borderBottomRadius={'md'}
                    bg={card}
                    alignItems="center"
                    px={'8'}
                  >
                    <Heading fontSize={'lg'}>Random Quotes</Heading>
                  </Box>
                </Stack>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.09 }}
                onClick={() => {
                  navigate('/login');
                }}
              >
                <Stack
                  w={['280px', '320px']}
                  h={['170px', '250px']}
                  rounded={'md'}
                  bg="white"
                  boxShadow={'lg'}
                  // shadow={'xl'}
                >
                  <Flex justify={'center'} w="full" py={3} rounded={'md'}>
                    <Image boxSize={[20, 40]} src={Img1} rounded={'md'} />
                  </Flex>
                  <Box
                    h="full"
                    display={'flex'}
                    borderBottomRadius={'md'}
                    bg={card}
                    alignItems="center"
                    px={'8'}
                  >
                    <Heading fontSize={'lg'}>Customized Quotes</Heading>
                  </Box>
                </Stack>
              </motion.button>
            </Stack>
          </Stack>

          {/* <Heading>Home2</Heading>
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/generate-quote')}>
            Generate Random Quote
          </Button> */}
        </Stack>
      </SnapContainer>
    </Box>
  );
}

export default Home;
