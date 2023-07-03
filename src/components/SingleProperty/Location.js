import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

function Location(props) {
    const { data } = props;
    return (
        <Box
            m={['1']}
            id='location' bgColor='white'>
            <Heading textAlign={'center'}>Location</Heading>
            <Box display='flex' flexDir={['column', 'column', 'row']} justifyContent='center' gap='15px' alignItems='center' >
                <Box w={['100%', '300px', '100%']}>
                    <iframe
                        title=' '
                        src={data?.map_link}
                        width="100%"
                        height="400px"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Location;;