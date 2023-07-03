import React from 'react';
import { Box, Flex, VStack, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
// import jsonData from '../../constants/data.json';

function NewLaunchedProjects(props) {
  const { ad1, ad2 } = props;
  const navigate = useNavigate();
  return (
    <Box>
      <Flex flexDir={['column', 'column', 'row']} justifyContent='center' gap='4'>
        <VStack p='4' key={1}>
          <Heading fontSize='xl'>{ad1?.heading}</Heading>
          <img src={ad1?.img_url} alt="" />
          <Button bgColor={'secondaryBg'}
            color='white'
            _hover={{ bgColor: 'white', color: 'secondaryBg', border: '1px solid #92B161' }}
            onClick={() => {
              navigate(`/property/${ad1?.property_name}`);
            }}
          >
            Know More
          </Button>
        </VStack>
        <VStack p='4' key={2}>
          <Heading fontSize='xl'>{ad2?.heading}</Heading>
          <img src={ad2?.img_url} alt="" />
          <Button bgColor={'secondaryBg'}
            color='white'
            _hover={{ bgColor: 'white', color: 'secondaryBg', border: '1px solid #92B161' }}
            onClick={() => {
              navigate(`/property/${ad2?.property_name}`);
            }}
          >
            Know More
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
}

export default NewLaunchedProjects;