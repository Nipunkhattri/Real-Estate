import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';

function PropertyDetails(props) {
    const { data, title } = props;
    return (
        <Box
        display={['none', 'none', 'block']}
            borderRadius='md' bgColor='white' >
            <Heading textAlign='center' mb='2' mt='2'
                fontSize={['2xl', '2xl', '4xl']} textTransform={'capitalize'}>{title} Configuration</Heading>
            <Box>
                {data?.map((item, i) => {
                    return (
                        <Box key={i} display='flex' justifyContent='space-between' alignItems='center' border='0.5px solid grey'>
                            <Box
                                display='flex'
                                alignItems='center'
                                w='50%'
                                borderRight='0.5px solid grey'
                                justifyContent={['center', 'center', 'flex-start']}
                                flexDirection={['column', 'column', 'row']}>
                                <Image m='2' h='70px' w='40px' objectFit='contain' src={item.icon_url} alt='' />
                                <Heading
                                    textAlign={'center'}
                                    ml={['2']} textTransform={'capitalize'} fontSize='xl' fontWeight='bold'>{item.heading}</Heading>
                            </Box>
                            <Box width='40%'>
                                <Heading
                                    textTransform={'capitalize'}
                                    fontSize={['16px','md','xl']} 
                                    fontWeight='semibold'>
                                    {item.heading_value}
                                </Heading>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}

export default PropertyDetails;