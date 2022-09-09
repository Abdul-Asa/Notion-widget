import React from 'react';
import {
  Flex,
  useColorModeValue,
  useMediaQuery,
  Text,
  Wrap,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { ColorModeSwitcher, SoundButton } from './IconButtons';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Header = ({ children, ...props }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isPhoneSize] = useMediaQuery(['(max-width: 470px)']);
  const invColor = useColorModeValue('white', '#191919');

  return (
    <Flex
      justify={'space-between'}
      bg={useColorModeValue('#fff', '#191919')}
      position="fixed"
      w="full"
      h="45px"
      overflow={'hidden'}
      zIndex={'docked'}
      alignItems="center"
      p="2"
      shadow={'sm'}
      fontSize={'14px'}
      px={[0, '16px']}
      overflowX={'hidden'}
    >
      <Stack pl={'4'} spacing={2} direction="row" alignItems={'center'}>
        {!isPhoneSize && (
          <>
            <span>🗿</span>
            <Text as="a" href="/" textOverflow={'ellipsis'}>
              Notion Quotes /
            </Text>
          </>
        )}
        <span>
          {' '}
          {pathname === '/' && '🏡'}
          {pathname === '/generate-quote' && '🎯'}
          {pathname === '/login' && '🚪'}
          {pathname === '/signup' && '📬'}
        </span>
        <Text as="a" href={pathname}>
          {pathname === '/' && 'Home'}
          {pathname === '/generate-quote' && 'Get Random Quotes'}
          {pathname === '/login' && 'Login'}
          {pathname === '/signup' && 'Signup'}
        </Text>
        {!(pathname === '/') && (
          <Flex justifyContent={'center'}>
            <IconButton
              bg={invColor}
              _hover={{ bgColor: invColor }}
              // justifyContent={'c'}
              h="fit-content"
              icon={<FiArrowLeft />}
              onClick={() => {
                navigate(-1);
              }}
            />
            <IconButton
              isDisabled
              bg={invColor}
              _hover={{ bgColor: invColor }}
              justifyContent={'start'}
              h="fit-content"
              icon={<FiArrowRight />}
            />
          </Flex>
        )}
      </Stack>

      <Wrap>
        <ColorModeSwitcher />
        <SoundButton />
      </Wrap>
    </Flex>
  );
};

export default Header;
