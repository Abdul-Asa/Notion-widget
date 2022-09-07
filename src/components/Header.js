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
// import { Logo } from './Logo';

const Header = ({ children, ...props }) => {
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
      px="16px"
    >
      <Stack spacing={2} direction="row" alignItems={'center'}>
        <span>🗿</span>
        <Text overflow={'clip'}>Notion Quote Page / Home </Text>
      </Stack>

      <Wrap>
        <ColorModeSwitcher />
        <SoundButton />
      </Wrap>
    </Flex>
  );
};

export default Header;
