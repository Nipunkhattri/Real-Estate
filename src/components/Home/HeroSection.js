import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();
  return (
    <Box
      display='flex'
      justifyContent='center'
      flexDir='column'
      gap='4'
      alignItems='center'
      backgroundImage={'https://ik.imagekit.io/i66bfudbc/herosp_NyeJ6iOxv?ik-sdk-version=javascript-1.4.3&updatedAt=1659239886720'}
      backgroundSize={['contain', '', '']}
      backgroundPosition='center'
      height={['30vh', '50vh', '80vh']} width='100%'>
      <SearchBar />
      <Button
        size={['sm', 'sm', 'md']}
        bgColor={'secondaryBg'}
        color='white'
        _hover={{ bgColor: 'white', color: 'secondaryBg', border: '1px solid #92B161' }}
        onClick={() => navigate('/list')}>
        Explore More
      </Button>
    </Box>
  );
}

export default HeroSection;