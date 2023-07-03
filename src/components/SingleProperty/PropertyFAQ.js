import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

function PropertyFAQ(props) {
  const { data } = props;

  const listOne = [
    data?.faq1,
    data?.faq2,
    data?.faq3,
    data?.faq4
  ];

  const listTwo = [
    data?.faq5,
    data?.faq6,
    data?.faq7,
    data?.faq8
  ];

  return (
    <Box>
      <Heading mb='4' mt='2' fontSize='3xl' textAlign='center'> Frequently Asked Questions(FAQ)</Heading>
      <Box
        m='auto'
        w={['100%', '90%', '90%']}
        display='flex'
        gap='20px'
        flexDir={['column', 'column', 'row']}
      >
        <Box>
          {listOne.map((item, index) => (
            <Box px={['5']} py={['3']} h='auto' key={index}>
              <Heading fontSize='xl' fontWeight='semibold'>Q. {item?.q}</Heading>
              <Heading fontSize='xl' fontWeight='xl' mt='2'>A. {item?.a}</Heading>
            </Box>
          ))}
        </Box>

        <Box>
          {listTwo.map((item, index) => (
            <Box px={['5']} py={['3']} h='auto' key={index}>
              <Heading fontSize='xl' fontWeight='semibold'>Q. {item?.q}</Heading>
              <Heading fontSize='xl' fontWeight='xl' mt='2'>A. {item?.a}</Heading>
            </Box>
          ))}
        </Box>

      </Box>
    </Box >
  );
}

export default PropertyFAQ;