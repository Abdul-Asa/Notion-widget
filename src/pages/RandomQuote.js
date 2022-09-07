import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Button,
  Heading,
  Flex,
  Stack,
  useClipboard,
  IconButton,
  Select,
  FormLabel,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import SnapContainer from '../components/SnapContainer';
import { getRandomQuote } from '../utils/quotable.api';
import { FaArrowLeft } from 'react-icons/fa';
import { BsArrowClockwise, BsClipboard } from 'react-icons/bs';
import { FaClipboardCheck } from 'react-icons/fa';

const RandomQuote = ({ location }) => {
  const navigate = useNavigate();
  const currentURL = window.location.href; // returns the absolute URL of a page
  const [quote, setquote] = useState('');
  const [tags, setTags] = useState('');
  const [url, seturl] = useState('');
  const [style, setstyle] = useState({ theme: '', size: 'sm' });
  const shuffle = () => {
    getRandomQuote(style.tags)
      .then(res => {
        setquote(res);
      })
      .catch(err => {
        setquote({ content: 'Error. Broken Link', author: 'Your device' });
        console.log(err);
      });
  };
  let { hasCopied, onCopy } = useClipboard(url);
  const handleChange = e => {
    const { value, name } = e.target;
    name === 'tags'
      ? setTags(value)
      : setstyle(el => {
          return { ...el, [name]: value };
        });
  };
  useEffect(() => {
    shuffle();
  }, []);
  useEffect(() => {
    seturl(
      `${currentURL}/url?styling=theme:${style.theme},size:${style.size},tags:${tags}`
    );
  }, [currentURL, style, tags]);

  return (
    <Box h="100vh" overflowY={'scroll'} scrollSnapType="y mandatory">
      <SnapContainer>
        <Flex justify={'flex-start'} p={4}>
          <IconButton icon={<FaArrowLeft />} onClick={() => navigate('/')} />
        </Flex>
        <Stack align={'center'} justifyContent="center" h="90%" spacing={4}>
          <Stack
            w={['90%', '60%']}
            bg={style.theme === 'Dark' ? 'black' : 'whiteAlpha.900'}
            color={style.theme === 'Dark' ? 'whiteAlpha.900' : 'black'}
            p={['8', '12', '20']}
            pos="sticky"
          >
            <Heading size={style.size}>{quote?.content}</Heading>
            <Text fontSize={style.size} alignSelf={'center'}>
              - {quote?.author}
            </Text>
            <Stack pos={'absolute'} right={0} bottom={0} direction="row">
              <IconButton
                icon={hasCopied ? <FaClipboardCheck /> : <BsClipboard />}
                variant="ghost"
                onClick={onCopy}
                color={style.theme === 'Dark' ? 'whiteAlpha.900' : 'black'}
              />
              <IconButton
                icon={<BsArrowClockwise />}
                variant="ghost"
                onClick={shuffle}
                color={style.theme === 'Dark' ? 'whiteAlpha.900' : 'black'}
              />
            </Stack>
          </Stack>
          <Stack w="fit-content">
            <FormLabel m={0}>Theme</FormLabel>
            <Select name="theme" onChange={handleChange}>
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </Select>
          </Stack>
          <Stack w="fit-content">
            <FormLabel m={0}>Size</FormLabel>
            <Select name="size" onChange={handleChange}>
              <option value="sm">Text</option>
              <option value="md">Heading 3</option>
              <option value="lg">Heading 2</option>
              <option value="xl">Heading 1</option>
            </Select>
          </Stack>
          <Stack w="fit-content">
            <FormLabel m={0}>Quote types</FormLabel>
            <Select name="tags" onChange={handleChange}>
              <option value="">Random</option>
              <option value="wisdom">Wisdom</option>
              <option value="friends">Friendship</option>
              <option value="inspirational">Inspirational</option>
              <option value="famous-quotes">Famous Quotes</option>
            </Select>
          </Stack>
          <Button onClick={onCopy}>Copy url</Button>
        </Stack>
      </SnapContainer>
    </Box>
  );
};

export default RandomQuote;
