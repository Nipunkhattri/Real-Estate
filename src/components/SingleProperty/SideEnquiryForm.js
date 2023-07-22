import React, { useState } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Box,
    Heading,
    useToast,
    Text,
} from '@chakra-ui/react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { send } from 'emailjs-com';

function SideEnquiryForm(props) {
    const { data } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [value, setValue] = useState();
    const toast = useToast();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        send(
            'service_mfmt19m',
            'template_4ox864j',
            {
                'name': e.target.name.value,
                'email': e.target.email.value,
                'message': e.target.message.value,
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
                bgColor={'black'} color='white'
                _hover={{ bgColor: 'white', color: 'black', border: '1px solid black' }}
                m='5' pos='fixed' right='-6' bottom="450" zIndex='50' ref={btnRef} onClick={onOpen}
            >
                Enquire Now
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Box
                            m='1'
                            p='1'
                            bgColor='whiteAlpha.700'
                            w='100%'
                            borderRadius='xl'

                        >
                            <Heading
                                mt={'22%'}
                                fontSize={'2xl'}
                                textAlign='center'
                                fontWeight='semibold'
                                borderBottom='1px solid #d9dbde'>
                                Pre-register here for <Text color='red'>best offers</Text>
                            </Heading>

                            <Box p='2' mt={'40%'}>
                                <form
                                    onSubmit={handleFormSubmit}
                                >
                                    <Input
                                        name='name'
                                        m='1'
                                        bgColor='white' placeholder='Name' size='md'
                                        required={true}
                                    />
                                    <Box bgColor='white' p='2' borderRadius='md' border='1px' m='1'>
                                        <PhoneInput
                                            placeholder="Enter phone number"
                                            defaultCountry="IN"
                                            value={value}
                                            onChange={setValue}
                                            required={true}
                                        />
                                    </Box>
                                    <Input type={'hidden'} name='phone' value={value} />
                                    <Input
                                        name='email'
                                        m='1'
                                        bgColor='white' placeholder='E-mail address' size='md'
                                        required={true}
                                    />
                                    <Input
                                        name='message'
                                        m='1'
                                        bgColor='white' placeholder='Please tell us your requirement' size='md'
                                        required={true}
                                    />
                                    <Input
                                        type={'submit'}
                                        value={'Submit Enquiry'}
                                        m='2'
                                        bgColor='black' color='white' s
                                        _hover={{ bgColor: 'white', color: 'black', border: '1px solid black' }}
                                    />
                                </form>
                            </Box>

                            <Box mt={'15%'}>
                                <Heading fontSize={'sm'} textAlign='center'>Call us at +91 7090667009</Heading>
                            </Box>

                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default SideEnquiryForm;