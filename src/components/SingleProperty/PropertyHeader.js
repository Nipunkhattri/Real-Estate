import React, { useEffect, useState } from 'react';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Heading, Image, Link, useDisclosure } from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import ModalEnquiryForm from './ModalEnquiryForm';

import jsonData from '../../constants/data.json';

const NavLinkList = jsonData.constantsData['NavLinkList'];

const NavMenu = () => (
    <>
        {NavLinkList.map((item, index) => (
            <Link href={`#${item}`}
                key={index}
                fontSize='xl'>
                {item}
            </Link>
        ))}
    </>
);


function PropertyHeader(props) {
    const { data, color_codes } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [headerBtnTxt, setHeaderBtnTxt] = useState("");
    const [headerBtnColor, setHeaderBtnColor] = useState("");
    useEffect(() => {
        Object.keys(color_codes).forEach(function (key, index) {
            if (color_codes[key].subcategory === data?.subcategory) {
                setHeaderBtnTxt(color_codes[key].subcategory);
                setHeaderBtnColor(color_codes[key].color_code);
            }
        });
        return () => {
        };
    }, [headerBtnColor, headerBtnTxt]);

    return (
        <Box
            top='0'
            bgColor='white'
            px='2'
            py='2'
            zIndex='999'
            boxShadow='dark-lg'
            display={'flex'} justifyContent='space-between' alignItems={'center'}>
            <Box display={'flex'} justifyContent='flex-start' alignItems={'center'}>
                <Link href="/">
                    <Image
                        width={['20', '50px', '12']}
                        height={['10', '50px', '100px']}
                        objectFit='contain'
                        src={data?.logo_url}
                        alt='' />
                </Link>
                <Box display={['none', 'none', 'flex']}
                    justifyContent='space-between' alignItems={'center'} gap='3'
                    ml='3'>
                    <NavMenu />
                </Box>
            </Box>
            <Box display={'flex'} alignItems='center' gap={'12px'} mx={5}>
                <Button size={['xs', 'md']}
                    textTransform={'capitalize'} bgColor='green' color='white'>Possession {data?.projectDetails?.[5]?.heading_value}</Button>
                <Button
                display={['none', 'none', 'block']}
                 size={['xs', 'md']} textTransform={'capitalize'} color='white' bgColor={headerBtnColor}>{headerBtnTxt}</Button>
                {window.innerWidth < 500 ? (
                    <ModalEnquiryForm data={data} isHeader='true' logo={data?.logo_url} />
                ) : (
                    <ModalEnquiryForm data={data} logo={data?.logo_url} />
                )}
                <HamburgerIcon w='7' h='7' ml={'3'} onClick={onOpen} display={['block', 'block', 'none']} />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody m='25%'>
                        <Box
                            display={'flex'}
                            flexDir={'column'}
                            justifyContent='space-between'
                            alignItems={'center'}
                            gap='4'
                            fontWeight={'black'}
                            fontSize='lg'
                        >
                            <Box>
                                <Image
                                    boxSize={'150px'}
                                    m='1'
                                    objectFit='contain'
                                    src={data?.logo_url}
                                    alt='' />
                            </Box>
                            <NavMenu />
                        </Box>
                    </DrawerBody>
                    <DrawerFooter>
                        <Box p='7'>
                            <Heading
                                fontSize={'md'}
                            >Call us at +91 7090667009</Heading>
                        </Box>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}

export default PropertyHeader;