import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaVolumeUp, FaVolumeOff } from 'react-icons/fa';
// import { motion, AnimatePresence, useMotionValue } from 'framer-motion';

const SoundButton = ({ ...props }) => {
  const [sound, setSound] = useState(true);
  // const x = useMotionValue(0);
  // const toggleSound = () => {
  //   callback();
  // };
  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${sound ? 'playSound' : 'mute'} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={() => setSound(!sound)}
      icon={sound ? <FaVolumeUp /> : <FaVolumeOff />}
      {...props}
    />
  );
};

export default SoundButton;
