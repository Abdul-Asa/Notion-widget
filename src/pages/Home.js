import React, { useState, useRef } from 'react';
import {
  Box,
  useMediaQuery,
  Text,
  useColorModeValue,
  Button,
  Heading,
  Image,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Flex,
  Stack,
  Center,
  Icon,
  Divider,
  Collapse,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { Icon1 } from '../components/IconButtons';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsChatSquareQuote, BsArrowDown, BsHeart } from 'react-icons/bs';
import { FaTwitter, FaGithub, FaCaretRight, FaCaretDown } from 'react-icons/fa';
import { useInView, motion, useSpring, useScroll } from 'framer-motion';
import SnapContainer from '../components/SnapContainer';
import Header from '../components/Header';
import Img1 from '../components/Logos & Images/Img1.png';
import Img2 from '../components/Logos & Images/Img2.png';
import Img4 from '../components/Logos & Images/Img4.png';
import Img5 from '../components/Logos & Images/Img5.png';
import heart from '../components/Logos & Images/heart.png';
import Footer from '../components/Footer';
import './styles.css';

// import Icon1 from '../components/Logos & Images/Icon1.svg';

function Home() {
  const [isPhoneSize, isLaptopSize] = useMediaQuery([
    '(max-width: 470px)',
    '(min-width: 1023px)',
  ]);
  const navigate = useNavigate();

  const [bar, setBar] = useState(0);
  const [likes, setLikes] = useState(0);
  const { isOpen, onToggle } = useDisclosure();
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
                  shadow="base"
                  rounded={'md'}
                  bg="white"
                >
                  <Flex justify={'center'} w="full" py={3} rounded={'md'}>
                    <Image boxSize={[20, 40]} src={Img5} rounded={'md'} />
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
                  shadow="base"
                >
                  <Flex justify={'center'} w="full" py={3} rounded={'md'}>
                    <Image boxSize={[20, 40]} src={Img4} rounded={'md'} />
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
          // justifyContent="center"
          h="full"
          pt={['16', 20]}
          opacity={isInView3 ? 1 : 0}
          transition={transition}
          ref={ref3}
        >
          <Stack w="full" px={['8', '12', '20%']} pb={4}>
            <Heading mb={[0, 4]} fontSize={['2xl', '2xl', '4xl']}>
              Show some Love ❤️
            </Heading>{' '}
            <Stack
              justify={'center'}
              alignItems={'center'}
              direction={['column', 'column', 'row']}
              rounded={'md'}
              spacing={[2, 2, 6]}
              py={[0, 0, 4]}
            >
              <form
                action="https://twitter.com/AbdullahShehu1"
                method="get"
                target="_blank"
              >
                <motion.button whileHover={{ scale: 1.09 }} type="submit">
                  <Flex
                    w={['300px', '300px', '350px']}
                    h={['80px', '80px', '120px']}
                    direction={'row'}
                  >
                    <Box
                      // display={'flex'}
                      p={'4'}
                      textAlign="start"
                      borderStartRadius={'md'}
                      w="210px"
                      bg={invColor}
                      border={'1px'}
                      borderColor={card}
                    >
                      <Heading fontSize={['sm', 'sm', 'md']} pb={[0, 0, '2']}>
                        Follow me on Twitter
                      </Heading>
                      <Text fontSize={['10px', '10px', '11px']}>
                        A quick follow on Twitter would mean a lot to me
                      </Text>
                    </Box>
                    <Flex
                      justify={'center'}
                      p={3}
                      w="140px"
                      bg={invColor}
                      borderTop={'1px'}
                      borderBottom={'1px'}
                      borderEnd={'1px'}
                      borderColor={card}
                    >
                      <Icon as={FaTwitter} boxSize={[14, 14, 24]} />
                    </Flex>
                  </Flex>
                </motion.button>
              </form>

              <form
                action="https://twitter.com/AbdullahShehu1"
                method="get"
                target="_blank"
              >
                <motion.button whileHover={{ scale: 1.09 }} type="submit">
                  <Flex
                    w={['300px', '300px', '350px']}
                    h={['80px', '80px', '120px']}
                    direction={'row'}
                  >
                    <Box
                      // display={'flex'}
                      p={'4'}
                      textAlign="start"
                      borderStartRadius={'md'}
                      w="210px"
                      bg={invColor}
                      border={'1px'}
                      borderColor={card}
                    >
                      <Heading fontSize={['sm', 'sm', 'md']} pb={[0, 0, '2']}>
                        Star on Github
                      </Heading>
                      <Text fontSize={['10px', '10px', '11px']}>
                        If you can, please leave a star on the github repository
                        😘
                      </Text>
                    </Box>
                    <Flex
                      justify={'center'}
                      p={3}
                      w="140px"
                      bg={invColor}
                      borderTop={'1px'}
                      borderBottom={'1px'}
                      borderEnd={'1px'}
                      borderColor={card}
                    >
                      <Icon as={FaGithub} boxSize={[14, 14, 24]} />
                    </Flex>
                  </Flex>
                </motion.button>
              </form>
            </Stack>
            <Heading
              textAlign={'center'}
              fontSize={['lg', 'lg', 'xl']}
              pb={[0, 0, 4]}
            >
              OR
            </Heading>
            <Heading textAlign={'center'} fontWeight="medium" fontSize={'sm'}>
              Just click the heart to leave a like 🤗 (or right click to unlike
              😒)
            </Heading>
            <Stack align={'center'} spacing={1}>
              <Heading fontSize={'lg'}>{likes}</Heading>
              <Button
                as={motion.button}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                fontSize={'2xl'}
                variant={'unstyled'}
                onClick={
                  bar < 1
                    ? () => {
                        setBar(bar + 0.2);
                        setLikes(likes + 1);
                      }
                    : () => {
                        console.log(likes);
                      }
                }
                onContextMenu={
                  bar > 0.1
                    ? e => {
                        e.preventDefault();
                        setBar(bar - 0.2);
                        setLikes(likes - 1);
                      }
                    : e => {
                        e.preventDefault();
                        console.log(likes);
                      }
                }
              >
                ❤️
              </Button>
              <Box w={['300px', '400px']} border={'1px solid'} rounded={'lg'}>
                <motion.div animate={{ scaleX: bar, width: '100%' }}>
                  <Box
                    // position={'absolute'}
                    bottom="0"
                    rounded={'lg'}
                    left="0"
                    right={0}
                    bgGradient="linear(to-r,#D1287A,#F9429E,pink)"
                    height={'20px'}
                  ></Box>
                </motion.div>
              </Box>
            </Stack>
            <Box pt={[0, 0, 6]} h={['100px', '150px']}>
              <Flex align={'center'}>
                <IconButton
                  variant={'unstyled'}
                  h="fit-content"
                  minW="fit-content"
                  icon={isOpen ? <FaCaretDown /> : <FaCaretRight />}
                  onClick={onToggle}
                />
                <Text
                  pl={3}
                  fontWeight="bold"
                  fontSize={['12px', '12px', '16px']}
                >
                  Important mentions
                </Text>
              </Flex>{' '}
              <Collapse in={isOpen} animateOpacity>
                <Box px={6}>
                  <UnorderedList>
                    <ListItem fontSize={['12px', '12px', '16px']}>
                      I am in no way affiliated with Notion. I just love the
                      simplicity of Notion in providing what you need to boost
                      productivity.
                    </ListItem>
                    <ListItem fontSize={['12px', '12px', '16px']}>
                      Design Inspirations:
                      <Text
                        ml={2}
                        as="a"
                        _hover={{
                          borderBottom: '1px solid',
                        }}
                        href="https://www.figma.com/community/file/877573866872969565"
                      >
                        Mauricio Quezada
                      </Text>{' '}
                      &
                      <Text
                        ml={2}
                        as="a"
                        _hover={{
                          borderBottom: '1px solid',
                        }}
                        href="https://www.figma.com/community/file/956676366169840092"
                      >
                        Notion
                      </Text>{' '}
                    </ListItem>
                    <ListItem fontSize={['12px', '12px', '16px']}>
                      Github Inspirations:
                      <Text
                        ml={2}
                        as="a"
                        _hover={{
                          borderBottom: '1px solid',
                        }}
                        href="https://github.com/lukePeavey/quotable"
                      >
                        Quotable{' '}
                      </Text>{' '}
                      &
                      <Text
                        ml={2}
                        as="a"
                        _hover={{
                          borderBottom: '1px solid',
                        }}
                        href="https://github.com/saman/notion-quote"
                      >
                        Saman
                      </Text>{' '}
                    </ListItem>
                    <ListItem fontSize={['12px', '12px', '16px']}>
                      If this gets a 100 hearts, I might consider adding a
                      picture slideshow widget
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Collapse>
            </Box>
          </Stack>
          <Divider w="70%" />
          <Footer />
        </Stack>
      </SnapContainer>
    </Box>
  );
}

export default Home;
