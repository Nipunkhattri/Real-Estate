import { Box, Heading, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';

function PropertyConfiguration(props) {
  const { data } = props;

  return (
    <Box m={['1','2','4']} p={['1','2','2']} borderRadius='md' boxShadow='xl' bgColor='white' id='Specifications'>
      <Heading textAlign={'center'} m='2' textTransform={'capitalize'}>{data?.heading}</Heading>

      <Box display={'flex'} gap='2' alignItems='center' justifyContent='center' flexWrap={'wrap'} mt='30px'>
        <Box p='2' borderRadius={'md'} boxShadow='md' h={'400px'} w={'400px'}>
          <Heading textAlign={'center'} m='2' textTransform={'capitalize'} size='lg'>
            {data?.content?.structure?.heading}
          </Heading>
          <Image
            display={'block'}
            m='auto'
            p='5'
            src={data?.content?.structure?.img_url} />
          <UnorderedList p='5'>
            {data?.content?.structure?.content.map((item, i) => (
              <ListItem key={i}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Box p='2' borderRadius={'md'} boxShadow='md' h={'400px'} w={'400px'}
          overflow={'auto'}
        >
          <Heading textAlign={'center'} m='2' textTransform={'capitalize'} size='lg'>
            {data?.content?.flooring?.heading}
          </Heading>
          <Image
            display={'block'}
            m='auto'
            p='5' src={data?.content?.flooring?.img_url} />
          <UnorderedList p='5'>
            {data?.content?.flooring?.content.map((item, i) => (
              <ListItem m='5' key={i}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Box p='2' borderRadius={'md'} boxShadow='md' h={'400px'} w={'400px'}
          overflow={'auto'}
        >
          <Heading textAlign={'center'} m='2' textTransform={'capitalize'} size='lg'>
            {data?.content?.doors?.heading}
          </Heading>
          <Image
            display={'block'}
            m='auto'
            p='5' src={data?.content?.doors?.img_url} />
          <UnorderedList p='5'>
            {data?.content?.doors?.content.map((item, i) => (
              <ListItem key={i}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Box p='2' borderRadius={'md'} boxShadow='md' h={'400px'} w={'400px'}>
          <Heading textAlign={'center'} m='2' textTransform={'capitalize'} size='lg'>
            {data?.content?.plumbing_and_sanitary?.heading}
          </Heading>
          <Image
            display={'block'}
            m='auto'
            p='5' src={data?.content?.plumbing_and_sanitary?.img_url} />
          <UnorderedList p='5'>
            {data?.content?.plumbing_and_sanitary?.content.map((item, i) => (
              <ListItem key={i}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Box p='2' borderRadius={'md'} boxShadow='md' h={'400px'} w={'400px'}>
          <Heading textAlign={'center'} m='2' textTransform={'capitalize'} size='lg'>
            {data?.content?.security?.heading}
          </Heading>
          <Image
            display={'block'}
            m='auto'
            p='5' src={data?.content?.security?.img_url} />
          <UnorderedList p='5'>
            {data?.content?.security?.content.map((item, i) => (
              <ListItem key={i}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Box p='2' borderRadius={'md'} boxShadow='md' h={'400px'} w={'400px'}>
          <Heading textAlign={'center'} m='2' textTransform={'capitalize'} size='lg'>
            {data?.content?.electrical?.heading}
          </Heading>
          <Image
            display={'block'}
            m='auto'
            p='5' src={data?.content?.electrical?.img_url} />
          <UnorderedList p='5'>
            {data?.content?.electrical?.content.map((item, i) => (
              <ListItem key={i}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>

      </Box>

    </Box>
  );
}

export default PropertyConfiguration;