import { Box, Button, Collapse, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

function AboutBuilder(props) {
  const { data, review_data } = props;
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box
      maxHeight='625px' overflow={'auto'} h='300px'>
      <Heading   textTransform={'capitalize'}
        mb='3'
        fontSize={['md', 'xl', '4xl']}
        fontWeight='semibold'
        textAlign='center'>{data?.heading}</Heading>
      <Box display='flex' flexDir={['column', 'column', 'column', 'row']} justifyContent={['center']} alignItems='center'>

        <Box p='2' borderRadius={'md'} w={['100%', '95%', '100%', '100%']}>
          <Collapse startingHeight={190} in={show}>
            <Text textAlign={'justify'} m='2' textTransform={'capitalize'} size='sm' fontSize={'md'}>
              {data?.content}
              <Box display={'flex'} flexDir={['column', 'column', 'row']} justifyContent={'space-evenly'} mt='2'>
                <Box p='6' m='2' borderWidth='1px' borderRadius='lg' textAlign={'center'}>
                  <Heading size={'lg'}>Completed </Heading>
                  <Text textAlign={'center'}>{data?.completed}</Text>
                </Box>
                <Box p='6' m='2' borderWidth='1px' borderRadius='lg' textAlign={'center'}>
                  <Heading size={'lg'}> Ongoing </Heading>
                  <Text textAlign={'center'}>{data?.ongoing}</Text>
                </Box>
                <Box p='6' m='2' borderWidth='1px' borderRadius='lg' textAlign={'center'}>
                  <Heading size={'lg'}> Upcoming </Heading>
                  <Text textAlign={'center'}>{data?.upcoming}</Text>
                </Box>
                <Box p='6' m='2' borderWidth='1px' borderRadius='lg' textAlign={'center'}>
                  <Heading size={'lg'}> Review </Heading>
                  <Text textAlign={'center'}>{review_data?.rating + ` / 5`}</Text>
                </Box>
              </Box>
            </Text>
          </Collapse>
          <Box display={'flex'}>
            <Button
              bgColor={'black'} color='white'
              my='5px'
              _hover={{ bgColor: 'white', color: 'black', border: '1px solid black' }}
              onClick={handleToggle}
              size='sm'>
              Read {show ? 'Less' : 'More'}
            </Button>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}

export default AboutBuilder;