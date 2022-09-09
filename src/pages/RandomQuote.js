import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Button,
  Heading,
  ListItem,
  Stack,
  Tag,
  useClipboard,
  IconButton,
  Select,
  FormLabel,
  // useColorModeValue,
  OrderedList,
} from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
import SnapContainer from '../components/SnapContainer';
import { getRandomQuote } from '../utils/quotable.api';
// import { FaArrowLeft } from 'react-icons/fa';
import { BsArrowClockwise, BsClipboard, BsArrowDown } from 'react-icons/bs';
import { FaClipboardCheck } from 'react-icons/fa';
import Header from '../components/Header';

const RandomQuote = ({ location }) => {
  // const navigate = useNavigate();
  const currentURL = window.location.href; // returns the absolute URL of a page
  const [quote, setquote] = useState('');
  const [tags, setTags] = useState('');
  const [url, seturl] = useState('');
  const [style, setstyle] = useState({ theme: 'Light', size: 'sm' });
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
      `${currentURL}/url?theme=${style.theme}&size=${style.size}&tag=${tags}`
    );
  }, [currentURL, style, tags]);

  return (
    <Box
      h="100vh"
      overflowY={'scroll'}
      scrollSnapType="y mandatory"
      scrollBehavior={'smooth'}
    >
      <Header />
      <SnapContainer>
        <Stack
          // align={'center'}
          justifyContent="center"
          h="90%"
          spacing={4}
          px={['8', '12', '40']}
        >
          <Heading pb={[0, 6]} fontSize={['2xl', '2xl', '4xl']}>
            ✨ Design your Widget
          </Heading>
          <Stack direction={['column', 'column', 'row']}>
            <Stack
              w="60%"
              bg={style.theme === 'Dark' ? 'black' : 'whiteAlpha.900'}
              color={style.theme === 'Dark' ? 'whiteAlpha.900' : 'black'}
              border="1px solid"
              borderColor={style.theme === 'Dark' ? 'whiteAlpha.900' : 'black'}
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
            <Stack w="40%" pl="20" spacing={4}>
              <Stack w="full">
                <FormLabel m={0}>Theme</FormLabel>
                <Select name="theme" onChange={handleChange}>
                  <option value="Light">Light</option>
                  <option value="Dark">Dark</option>
                </Select>
              </Stack>
              <Stack w="full">
                <FormLabel m={0}>Size</FormLabel>
                <Select name="size" onChange={handleChange}>
                  <option value="sm">Text</option>
                  <option value="md">Heading 3</option>
                  <option value="lg">Heading 2</option>
                  <option value="xl">Heading 1</option>
                </Select>
              </Stack>
              <Stack w="full">
                <FormLabel m={0}>Quote types</FormLabel>
                <Select name="tags" onChange={handleChange}>
                  <option value="">Random</option>
                  <option value="wisdom">Wisdom</option>
                  <option value="friendship">Friendship</option>
                  <option value="inspirational">Inspirational</option>
                  <option value="famous-quotes">Famous Quotes</option>
                </Select>
              </Stack>
            </Stack>
          </Stack>
          <Button
            variant={'outline'}
            alignSelf="center"
            as={'a'}
            href="#slide2"
            w="fit-content"
            size={['sm', 'md']}
            rightIcon={<BsArrowDown />}
          >
            Next
          </Button>
          {/* <Button onClick={onCopy}>Copy url</Button> */}
        </Stack>
      </SnapContainer>
      <SnapContainer id="slide2">
        <Stack
          // align={'center'}
          justifyContent="center"
          h="90%"
          spacing={4}
          px={['8', '12', '40']}
        >
          <Heading pb={[0, 6]} fontSize={['2xl', '2xl', '4xl']}>
            🤷‍♂️ What Next?
          </Heading>
          <Stack direction={['column', 'column', 'row-reverse']} pb={4}>
            <Stack
              w="60%"
              bg={style.theme === 'Dark' ? 'black' : 'whiteAlpha.900'}
              color={style.theme === 'Dark' ? 'whiteAlpha.900' : 'black'}
              border="1px solid"
              borderColor={style.theme === 'Dark' ? 'whiteAlpha.900' : 'black'}
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
            <Stack w="40%" pr="20" spacing={4}>
              <Stack w="full" direction={'row'}>
                <FormLabel m={0} fontWeight="bold">
                  Tags:
                </FormLabel>
                <Tag bg="rgb(255 226 221)" color={'black'}>
                  {' '}
                  {style?.theme}
                </Tag>
                {style.size === 'sm' && (
                  <Tag color={'black'} bg="rgb(253 236 200)">
                    Text
                  </Tag>
                )}
                {style.size === 'md' && (
                  <Tag color={'black'} bg="rgb(253 236 200)">
                    {' '}
                    Heading 3
                  </Tag>
                )}
                {style.size === 'lg' && (
                  <Tag color={'black'} bg="rgb(253 236 200)">
                    {' '}
                    Heading 2
                  </Tag>
                )}
                {style.size === 'xl' && (
                  <Tag color={'black'} bg="rgb(253 236 200)">
                    {' '}
                    Heading 1
                  </Tag>
                )}
                <Tag color={'black'} bg="rgb(211 229 239)">
                  {' '}
                  {tags ? tags : 'Random'}
                </Tag>
              </Stack>
              <Stack pt="6">
                <OrderedList spacing={3}>
                  <ListItem fontSize={['12px', '12px', '16px']}>
                    Design your widget in the section above
                  </ListItem>
                  <ListItem fontSize={['12px', '12px', '16px']}>
                    Click on Copy Link button
                  </ListItem>
                  <ListItem fontSize={['12px', '12px', '16px']}>
                    Paste it in a Notion block and select 'Create Embed' in the
                    drop down
                  </ListItem>
                  <ListItem fontSize={['12px', '12px', '16px']}>
                    Enjoy your WIdget!😁{' '}
                  </ListItem>
                </OrderedList>
              </Stack>
            </Stack>
          </Stack>
          <Button onClick={onCopy} w={['90%', '30%']}>
            Copy url
          </Button>
        </Stack>
      </SnapContainer>
    </Box>
  );
};

export default RandomQuote;
