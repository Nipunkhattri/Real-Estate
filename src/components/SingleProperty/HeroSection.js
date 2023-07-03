import React, { useState } from 'react';
import HeroAdvertisement from './HeroAdvertisement';
import { Box, Heading, Text, Button, Input, Image, useToast } from '@chakra-ui/react';
import HeroConatctForm from './HeroConatctForm';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { send } from 'emailjs-com';
import ModalEnquiryForm from './ModalEnquiryForm';
import jsonData from '../../constants/data.json';


function HeroSection(props) {
  const { data, heroImg, hero_data } = props;
  const [value, setValue] = useState();
  const toast = useToast();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    send(
      'service_mfmt19m',
      'template_4ox864j',
      {
        'name': e.target.name.value,
        'phone': e.target.phone.value,
        'property_name': data.title,
        'property_id': data._id,
      },
      'ZxR-1NTtKZfUhYaDf'
    )
      .then((response) => {
        toast({
          title: 'Success',
          description: "Your query submitted successfully.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
  return (
    <Box
      pos='relative'
      id='Home'
      bgImage={['', '', '', heroImg]}
      height={['100%', '100%', '100%', '90vh']}
      backgroundPosition='center'
      backgroundRepeat={'no-repeat'}
      backgroundSize={['contain', 'cover', 'cover', 'cover']}
    >
      <HeroAdvertisement data={data} hero_data={data?.hero_card} />
      <HeroConatctForm data={data} />
      <Box display={['block', 'block', 'block', 'none']}>
        <Image display={['block', 'block', 'block', 'none']} src={heroImg}
          alt='' />
        <Box>
          <Box
            m='1'
            p='2'
            bgColor='white'
            borderRadius='md'
            textAlign='center'
          >
            <Heading fontSize='3xl' fontWeight={'bold'}
              mt='3' mb='3' textTransform={'capitalize'}>
              {data?.title}
            </Heading>
            <Heading fontSize='xl' fontWeight={'semibold'} textTransform='capitalize'>{data?.location}</Heading>
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
          <Box
            m='1'
            p='2'
            right='0'
            bgColor='white'
            borderRadius='md'>
            <Heading
              fontSize={'2xl'}
              textAlign='center'
              fontWeight='semibold'>
              Pre-register here for <Text color='red'>best offers</Text>
            </Heading>
            <Box borderTop='1px solid #d9dbde' p='2'>
              <form onSubmit={handleFormSubmit}>
                <Input
                  name='name'
                  m='1'
                  bgColor='white' placeholder='Name' size='md' />
                <Box border='1px solid #EDF2F7' bgColor='white' p='2' borderRadius='md' m='1'>
                  <PhoneInput
                    placeholder="Enter phone number"
                    defaultCountry='IN'
                    value={value}
                    onChange={setValue}
                  />
                </Box>
                <Input type={'hidden'} name='phone' value={value} />
                <Input bgColor={'black'} color='white'
                  _hover={{ bgColor: 'white', color: 'black', border: '1px solid black' }} type={'submit'} value={'Submit Enquiry'} m='2' />
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;