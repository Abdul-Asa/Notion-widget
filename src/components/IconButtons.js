import React, { useState } from 'react';
import {
  useColorMode,
  useColorModeValue,
  createIcon,
  IconButton,
} from '@chakra-ui/react';
// import { FaSun, FaVolumeUp, FaVolumeOff } from 'react-icons/fa';
import {
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineVolumeOff,
  HiOutlineVolumeUp,
} from 'react-icons/hi';
// import { motion, AnimatePresence, useMotionValue } from 'framer-motion';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(HiOutlineMoon, HiOutlineSun);

  return (
    <IconButton
      w="33px"
      h="28px"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      marginLeft={[0, '2']}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export const SoundButton = ({ ...props }) => {
  const [sound, setSound] = useState(true);

  return (
    <IconButton
      w="33px"
      h="28px"
      aria-label={`Switch to ${sound ? 'playSound' : 'mute'} mode`}
      variant="ghost"
      // color="current"
      marginLeft="2"
      onClick={() => setSound(!sound)}
      icon={sound ? <HiOutlineVolumeUp /> : <HiOutlineVolumeOff />}
      {...props}
    />
  );
};

export const Icon1 = createIcon({
  displayName: 'Icon1',
  viewBox: '0 0 20 20',
  d: 'M8.333 10.833h-5a.833.833 0 00-.833.834v5a.833.833 0 00.833.833h5a.833.833 0 00.834-.833v-5a.833.833 0 00-.834-.834zm-.833 5H4.167V12.5H7.5v3.333zM16.667 2.5h-5a.833.833 0 00-.834.833v5a.833.833 0 00.834.834h5a.833.833 0 00.833-.834v-5a.833.833 0 00-.833-.833zm-.834 5H12.5V4.167h3.333V7.5zm.834 5.833H15v-1.666a.833.833 0 00-1.667 0v1.666h-1.666a.833.833 0 000 1.667h1.666v1.667a.833.833 0 001.667 0V15h1.667a.833.833 0 000-1.667zM8.333 2.5h-5a.833.833 0 00-.833.833v5a.833.833 0 00.833.834h5a.833.833 0 00.834-.834v-5a.833.833 0 00-.834-.833zm-.833 5H4.167V4.167H7.5V7.5z',
});
