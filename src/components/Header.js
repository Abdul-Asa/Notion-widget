import React, { useState } from 'react';
import {
  Flex,
  useColorMode,
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Text,
  Wrap,
  Icon,
  WrapItem,
  Stack,
} from '@chakra-ui/react';
import { ColorModeSwitcher, SoundButton } from './IconButtons';
import { useLocation } from 'react-router-dom';
// import { Logo } from './Logo';

const Header = ({ children, ...props }) => {
  const { pathname } = useLocation();

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
      fontSize={'14px'}
      px={[0, '16px']}
      overflowX={'hidden'}
    >
      <Stack pl={[0, '4']} spacing={2} direction="row" alignItems={'center'}>
        <span>🗿</span>
        <Text as="a" href="/" textOverflow={'ellipsis'}>
          Notion Quotes /
        </Text>
        <span>🏡</span>
        <Text as="a" href={pathname}>
          {pathname === '/' && 'Home'}
          {pathname === '/generate-quote' && 'Get Random Quotes'}
          {pathname === '/login' && 'Login'}
          {pathname === '/signup' && 'Signup'}
        </Text>
      </Stack>

      <Wrap>
        <ColorModeSwitcher />
        <SoundButton />
      </Wrap>
    </Flex>
  );
};

export default Header;
