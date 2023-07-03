import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';

function Disclaimerpage() {
  return (

    <Box>
      <Header />
      <Box m='auto' p='2' w='90%' h='78vh'>
        <Heading textAlign={'center'}>Disclaimer</Heading>
        <Box fontSize={'2xl'} py='21'>
          The content is for information purposes only and does not constitute an offer to avail of any service. Prices
          mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purpose only.
          This is not the official website Website Only use for an Advertisement Purpose.
        </Box>
      </Box>
    </Box>
  );
}

export default Disclaimerpage;