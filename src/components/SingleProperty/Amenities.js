import { Box, Circle, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

function Amenities(props) {
  const { data } = props;
  return (
    <Box
      m={['1', '2', '4']} p={['1', '2', '4']}
      borderRadius='md' boxShadow='xl' bgColor='white' id='Amenities'>
      <Heading textAlign={'center'} m='2'>Amenities</Heading>

      <SimpleGrid
        w='90%' margin={'auto'}
        columns={[2, 3, 5]} spacing={10}
        gap={8}
        justifyContent='center'
        alignItems={'center'}
      >

        {data?.map((item, i) => (
          <Box
            borderRadius={'2xl'}
            display='flex'
            justifyContent={'center'}
            alignItems='center' flexDir={'column'}
            p='2'
            key={i}>
            <Circle
              m='1'
              w='78px' h='78px'
              bgGradient='linear(to-l,rgba(202, 204, 255, 1),rgba(165, 164, 255, 1))'>
              <Image src={item?.img_url} alt="image logo" />
            </Circle>
            <Heading
              fontSize={'md'} textAlign='center' textTransform={'capitalize'}>{item?.title}</Heading>
          </Box>
        ))}

      </SimpleGrid>


    </Box >
  );
}

export default Amenities;