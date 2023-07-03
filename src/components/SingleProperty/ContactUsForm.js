import { Box, Heading, Divider, Text, Tabs, TabList, Tab, TabPanels, TabPanel, HStack, Button, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import { send } from 'emailjs-com';
import jsonData from '../../constants/data.json';

function ContactUsForm({ data }) {
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
        console.log('SUCCESS!', response.status, response.text);
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

  const propFilterDetails = jsonData.constantsData["propFilterDetails"];
  return (
    <Box m='8' p='4' borderRadius='md' boxShadow='xl' bgColor='white'>
      <Heading textAlign={'left'} m='2' textTransform={'capitalize'} size='md'>
        Let the Experts help you find the Best Property :
      </Heading>
      <Divider />

      <Box mt={'6'}>
        <Text p='3' as='i'>
          A FREE Initiative by Square Reality  |  We Charge ZERO Commission or Brokerage
        </Text>
      </Box>

      <form onSubmit={handleFormSubmit}>
        <Box
          display={'flex'} flexDir={['column', 'column', 'row']}
          justifyContent={'space-between'}
          w='90%'
          alignItems={'center'}
        >
          <Box mt={'6'}>
            <Text ml='6'>
              Select Property Type: <span style={{ color: 'red' }}>*</span>
            </Text>

            <Tabs
              variant={'unstyled'}
            >
              <TabList display={'flex'}
                flexDir={['column', 'column', 'row']}
              >
                {propFilterDetails.map((item, i) => (
                  <Tab key={i}>
                    <Button
                      border='2px'
                    >
                      {item.name}
                    </Button>
                  </Tab>
                ))}
              </TabList>

              <Text mt='6' ml='6'>
                Select Property Size: <span style={{ color: 'red' }}>*</span>
              </Text>

              <TabPanels
                display={'flex'}
                flexDir={['column', 'column', 'row']}
                justifyContent={'center'}
                alignItems={'center'}
              >
                {propFilterDetails.map((item, i) => (
                  <TabPanel key={i}>
                    <HStack
                      display={'flex'}
                      flexDir={['column', 'column', 'row']}
                    >
                      {item.preference.map((pref, j) => (
                        <Button border='2px' key={j} w='100%'> {pref}</Button>
                      ))}
                    </HStack>
                  </TabPanel>
                ))}

              </TabPanels>
            </Tabs>


          </Box>

          <Box mt={'6'} width={"350px"}>
            <Text ml='6'>Your Name: <span style={{ color: 'red' }}>*</span></Text>
            <Input
              name='name'
              m='1'
              bgColor='white' placeholder='Name' size='md'
            />

            <Text ml='6'>Contact Number: <span style={{ color: 'red' }}>*</span></Text>
            <Box bgColor='white' p='3' borderRadius='md' m='1' width={'100%'} border={".1px solid black"}>
              <PhoneInput
                placeholder="Enter phone number"
                defaultCountry="IN"
                value={value}
                onChange={setValue}
              />
            </Box>
            <Input type={'hidden'} value={value} name='phone' />

          </Box>

        </Box>

        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          mt={'6'}
        >
          <Input type={'submit'} value={'Submit Enquiry'} m='2' />

        </Box>
      </form>

    </Box >
  );
}

export default ContactUsForm;