import { Box, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';
import contactus from '../lotties/contactus.json'
import Lottie from "lottie-react";
import { Mail, Phone } from 'react-feather';

function ContactUspage() {
  return (
    <>
      <Header />
      <Stack h={['80vh', '80vh', '90vh']} justifyContent={['', '', 'space-around']} direction={['column', 'column', 'row']} align={'center'} spacing={[2, 5, 10]}>
        <Box display={['none', 'none', 'block']}>
          <Lottie
            animationData={contactus}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "500px" }}
          />
        </Box>
        <Box display={['block', 'block', 'none']}>
          <Lottie
            animationData={contactus}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "400px" }}
          />
        </Box>
        <Box>
          <Heading textAlign={'center'}
            fontSize='6xl'
            mb={5}
            color={'secondaryBg'}>Contact Us</Heading>
          <HStack my={2}>
            <Mail />
            <Text>
              Email - gautamvns11@gmail.com
            </Text>
          </HStack>
          <HStack my={2}>
            <Phone />
            <Text>
              Phone - +91 9844887711
            </Text>
          </HStack>
        </Box>
      </Stack>
    </>
  );
}

export default ContactUspage;;