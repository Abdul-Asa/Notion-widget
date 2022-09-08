import React, { useState } from 'react';
import { Box, Link, Stack } from '@chakra-ui/react';
import { ColorModeSwitcher, SoundButton } from './IconButtons';
// import { Logo } from './Logo';

const Footer = ({ children, ...props }) => {
  return (
    <Box
      align={'center'}
      fontSize={['xs', 'sm']}
      as="footer"
      position={'sticky'}
      p="10"
    >
      Made with {'\u00a0'}
      <span
      //  onClick={handleClick}
      >
        ❤️
      </span>
      {'\u00a0'} by {'\u00a0'}
      <Link href="https://twitter.com/AbdullahShehu1" target={'_blank'}>
        Shehu
      </Link>
    </Box>
  );
};

export default Footer;
