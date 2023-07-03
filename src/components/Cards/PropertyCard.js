import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Flex,
  Image,
} from '@chakra-ui/react';
import { RiWhatsappFill, RiPhoneFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function PropertyCard(props) {
  const { data } = props;
  const navigate = useNavigate();
  return (
    <Box
      m='2'
      minW='310px'
      maxW={'430px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={['md','xl','2xl']}
      rounded={'md'}
      p={['1.5', '2', '4']}
      overflow={'hidden'} 
      position='relative'>
      <Box position='absolute'
        top='4' left='4'
        backgroundColor='red.500'
        color='white'
        textTransform={'capitalize'}
        fontWeight='extrabold'
        borderRadius='sm'
        p='1'>
        {data?.subcategory}
      </Box>
      <Box height='200'>
        <Image
          cursor='pointer'
          onClick={() => {
            navigate(`/property/${data?._id}`);
          }}
          height='200' w='100%' src={data?.card_image_url || 'https://ik.imagekit.io/q8qsfnr9wag/ezgif.com-gif-maker_6r8M6zUPL.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652557196270'}
          alt=""
        />
      </Box>
      <Stack>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'xl'} mt='2' textTransform='capitalize'>
          {data?.title}
        </Heading>
        <Text
          color={'secondaryBg'}
          textTransform={'capitalize'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}>
          {data?.location}
        </Text>
        <Text
          color={'primaryText'}
          textTransform={'capitalize'}
          fontWeight={500}
          fontSize={'sm'}
          letterSpacing={1.1}>
          {data?.units} units
        </Text>
        <Text
          color={'primaryText'}
          textTransform={'uppercase'}
          fontWeight={500}
          fontSize={'sm'}
          letterSpacing={1.1}>
          {data?.unitVariants}
        </Text>
        <Text
          color={'primaryText'}
          textTransform={'uppercase'}
          fontWeight={500}
          fontSize={'sm'}
          letterSpacing={1.1}>
          ₹ {data?.price}
        </Text>
        <Flex gap='4' alignItems='center' justifyContent='flex-end'>
          <Box>
            <a
              href="https://wa.me/7090667009"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiWhatsappFill cursor={'pointer'} size='25' color='#00A884' />
            </a>
          </Box>
          <Box>
            <a href="tel:+91-7522828359">
              <RiPhoneFill cursor={'pointer'} size='25' color='#1D358F' />
            </a>
          </Box>
          <Button
            bgColor={'secondaryBg'} color='white'
            _hover={{ bgColor: 'white', color: 'secondaryBg', border: '1px solid #1D358F' }}
            onClick={() => {
              navigate(`/property/${data?._id}`);
            }}>Know More</Button>
        </Flex>
      </Stack>
    </Box>
  );
}

export default PropertyCard;