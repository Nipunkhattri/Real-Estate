import { Button, Image, Stack, Text, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Box,
    Input,
    Heading
} from '@chakra-ui/react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { send } from 'emailjs-com';
import jsonData from '../../constants/data.json';


function ModalEnquiryForm2({ data, logo, text = 'Get in Touch', isHeader = 'false' }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [value, setValue] = useState();
    const toast = useToast();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        send(
            'service_mfmt19m',
            'template_1olt7zb',
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
    return (
        <>
            <Button
                size={isHeader === 'true' ? ('xs') : ('md')}
                bgColor={'black'} color='white'
                _hover={{ bgColor: 'white', color: 'black', border: '1px solid black' }}
                onClick={onOpen}>
                {text}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>
                            <Heading as='h2' size={['sm', 'sm', 'sm', 'lg']}>
                                Pre-register here for <span style={{ color: "red", textTransform: "capitalize" }}>best offers</span>
                            </Heading>
                            <Box display={'flex'}>
                                <Box
                                    display={['none', 'none', 'flex']} justifyContent='center' alignItems={'center'}
                                    flexDir='column'
                                >
                                    {jsonData.constantsData['modalEnquiryList'].map((item, index) => (
                                        <Box display={'flex'} justifyContent='center' alignItems={'center'} flexDir='column' py='5' key={index}>
                                            <Image h='50px'
                                                src={item.imageUrl}
                                                alt='' />
                                            <Heading fontSize={'md'} textAlign='center' fontWeight='light'>
                                                {item.heading}
                                            </Heading>
                                        </Box>
                                    ))}


                                </Box>

                                <Stack align='center' spacing={4} mx='auto' my={2}>
                                    <Image
                                        display='block'
                                        m='auto'
                                        boxSize={'120'}
                                        objectFit='contain' src={logo} alt='' />
                                    <Box p='2'>
                                        <form
                                            onSubmit={handleFormSubmit}
                                        >
                                            <Stack align='center' spacing={4}>
                                                <Input
                                                    name='name'
                                                    bgColor='white' placeholder='Name' size='md'
                                                    css={{ border: "1px solid black" }} />

                                                <Box bgColor='white' p='1' border={'1px'} borderRadius='md' m='2'>
                                                    <PhoneInput
                                                        placeholder="Enter phone number"
                                                        defaultCountry="IN"
                                                        value={value}
                                                        onChange={setValue}
                                                        className="custom_phone_input"
                                                    />
                                                </Box>
                                                <Input type={'hidden'} name='phone' value={value} />
                                                <Input bgColor={'black'} color='white'
                                                    _hover={{ bgColor: 'white', color: 'black', border: '1px solid black' }}
                                                    type={'submit'} m='1' value={'Submit Enquiry'} />
                                            </Stack>
                                        </form>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>

                    </ModalBody>
                    <Box bgColor={'black'} color={'white'} border={'1px solid'} p='4'>
                        <Heading
                            fontSize={'md'}
                            textAlign='center'
                        >
                            <a href='tel:+91-7090667009' style={{ color: 'white' }}>
                                Call us at +91 7090667009</a></Heading>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalEnquiryForm2;