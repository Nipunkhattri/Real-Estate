import React from 'react';
import { Heading, Box, Button, Text } from '@chakra-ui/react';
import ModalEnquiryForm from './ModalEnquiryForm';
import jsonData from '../../constants/data.json';

function HeroAdvertisement(props) {
    const { data, hero_data } = props;
    return (
        <Box
            display={['none', 'none', 'none', 'block']}
            m='5'
            p='2'
            pos={'absolute'}
            left='0'
            bgColor='whiteAlpha.700'
            w='400px'
            borderRadius='xl'
            boxShadow='md'
            textAlign='center'
        >
            <Heading fontSize='3xl' fontWeight={'bold'}
                mt='3' mb='3' textTransform={'capitalize'}>
                {data?.title}
            </Heading>
            <Heading fontSize='xl' fontWeight={'semibold'} textTransform='capitalize'>
                {data?.location}
            </Heading>
            <Heading fontSize='md' fontWeight='500' mb='5'>{hero_data?.builder_name}</Heading>
            <Box display='flex' flexDir={'column'} justifyContent='center' alignItems='center' gap='4px'>
                <Box display='flex' >
                    <Heading fontSize='md' fontWeight='bold'>Open Space</Heading>
                    <Heading fontSize='md' fontWeight='500' ml='2'>{hero_data?.open_space}</Heading>
                </Box>
                <Box display='flex'>
                    <Heading fontSize='md' fontWeight='bold'>Units</Heading>
                    <Heading fontSize='md' fontWeight='500' ml='2'>{hero_data?.units}</Heading>
                </Box>
                <Box display='flex'>
                    <Heading fontSize='md' fontWeight='bold'>Possession</Heading>
                    <Heading fontSize='md' fontWeight='500' ml='2'>{hero_data?.possession}</Heading>
                </Box>
            </Box>
            <Heading fontSize='md' fontWeight='500' m='4'>{hero_data?.nearby_location}</Heading>
            <Button w='100%'>
                Booking Open
            </Button>
            <Box mt='6'>
                <Heading fontSize={'lg'} fontWeight='semibold'>{hero_data?.line1_data}</Heading>
                <Box m='2' display='flex' alignItems='center ' justifyContent='center'>
                    <Heading fontSize='3xl' fontWeight='semibold'>{hero_data?.line2_data}</Heading>
                </Box>
                <ModalEnquiryForm text={'Enquire Now'} logo={data?.logo_url} />
                <Heading m='3' fontSize='sm' fontWeight='semibold'>{hero_data?.line3_data}</Heading>
                <Text m='4' fontSize='xs' fontWeight='bold'>{hero_data?.line4_data}</Text>
            </Box>
        </Box>
    );
}

export default HeroAdvertisement;