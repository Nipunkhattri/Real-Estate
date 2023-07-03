import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

function VideoSection(props) {
  const { data } = props;
  return (
    <Box
      m={['1']} p={['1']}
      id='Gallery'
      borderRadius='md' boxShadow='xl' bgColor='white'>
      <SimpleGrid columns={[2, 3, 5]} spacing='10px'>
        {data?.map((s, i) => {
          return (
            <Box
              bgColor='white'
              m={['1']} p={['1']}
              key={i}>
              <iframe
                title=' '
                src={s}
                width="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </Box >
          );
        })}
      </SimpleGrid>
    </Box>
  )
}

export default VideoSection;