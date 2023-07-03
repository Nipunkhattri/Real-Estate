import React from 'react';
import { Box, Button, Collapse, Heading, Text } from '@chakra-ui/react';
import ModalEnquiryForm from './ModalEnquiryForm';

function Overview(props) {
  const { data, logo } = props;
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box textAlign='center' id='About'
      maxHeight='625px' overflow={'auto'} h='300px'>
      <Heading
        textTransform={'capitalize'}
        mb='3'
        fontSize={['md', 'xl', '4xl']}
        fontWeight='semibold'>
        {data?.heading}
      </Heading>
      <Collapse startingHeight={150} in={show}>
        <Text textAlign={'justify'} m='2' textTransform={'capitalize'} fontSize={'md'}>
          {data?.content}
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

      <ModalEnquiryForm text={'Download Brochure'} logo={logo} />
    </Box>
  );
}

export default Overview;