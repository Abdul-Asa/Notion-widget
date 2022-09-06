import React, { useEffect, useState } from 'react';
import {
  Text,
  Heading,
  useClipboard,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { getRandomQuote } from '../utils/quotable.api';
import { BsArrowClockwise, BsClipboard } from 'react-icons/bs';
import { FaClipboardCheck } from 'react-icons/fa';

const GeneratedQuote = () => {
  const [searchParams] = useSearchParams();
  const styling = searchParams.get('styling');
  const themeParam = styling.lastIndexOf('theme');
  const sizeParam = styling.lastIndexOf('size');
  const tagParam = styling.lastIndexOf('tag');

  console.log({
    theme: styling.substring(themeParam + 6, sizeParam - 1),
    size: styling.substring(sizeParam + 5, tagParam - 1),
    tags: styling.substring(tagParam + 5, styling.length),
  });
  const [quote, setquote] = useState({
    content: 'Error. Broken Link',
    author: 'Your device',
  });
  const [style] = useState({
    theme: styling.substring(themeParam + 6, sizeParam - 1) || '',
    size: styling.substring(sizeParam + 5, tagParam - 1) || 'sm',
    tags: styling.substring(tagParam + 5, styling.length) || '',
  });
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
  const { hasCopied, onCopy } = useClipboard(quote.content);

  useEffect(() => {
    shuffle();
  }, []);

  return (
    <Stack
      w={['90%', '60%']}
      bg={style.theme === 'Dark' ? 'black' : 'whiteAlpha.900'}
      color={style.theme === 'Dark' ? 'whiteAlpha.900' : 'black'}
      p={['8', '12', '20']}
      pos="fixed"
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
  );
};

export default GeneratedQuote;
