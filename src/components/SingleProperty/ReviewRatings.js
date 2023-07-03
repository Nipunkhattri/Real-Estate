import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const ReviewRatings = ({ data: { heading, rating } }) => {
    return (
        <Box 
        m={['1','2','4']} p={['1','2','2']}
            borderRadius='md' boxShadow='xl' bgColor='white'
            id='Ratings'
        >
            <Heading textAlign={'center'} m='2' textTransform={'capitalize'}>{heading}</Heading>
            <Box display={'flex'} flexDir={'column'} mt='4' mr='auto' ml='auto' p='5' w='90%' border={'2px solid red'} alignItems='center' justifyContent={'center'}>
                <Box>
                    {Array(5)
                        .fill("")
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                fontSize={'2xl'}
                                color={i + 1 < rating ? "red.500" : "gray.300"}
                            />
                        ))}
                </Box>
                <Heading mt='2' fontWeight={'regular'}>
                    {rating} / 5
                </Heading>
            </Box>
        </Box>
    );
};

export default ReviewRatings;