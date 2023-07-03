import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Heading, Image, Link, LinkBox, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import jsonData from '../constants/data.json';

const NavMenu = () => (
    <>
        <Link href='/'>
            <Text fontSize='xl'>
                Home
            </Text>
        </Link>
        <Link href='/list'>
            <Text fontSize='xl'>
                Property
            </Text>
        </Link>
        <Link href='/about'>
            <Text fontSize='xl'>
                About Us
            </Text>
        </Link>
        <Link href='/contact'>
            <Text fontSize='xl'>
                Contact Us
            </Text>
        </Link>
    </>
);

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box position={'sticky'} top='0' zIndex={'1000'}
            boxShadow='dark-lg'
            bgColor={'white'} display={'flex'} alignItems={'center'}
        >

            <Link href="/">
                <Image
                    width={['20', '50px', '100px']}
                    m='1'
                    objectFit='contain'
                    src={'https://ik.imagekit.io/i66bfudbc/Sqrepng_meYXT9KXS_W-Tr1QHTj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660600918582'}
                    alt='' />
            </Link>

            <Box display={'flex'} justifyContent={'space-between'} w='100%'>

                <Box ml={'15'}>
                    <Menu>
                        <MenuButton fontSize='xl'>
                            Bangalore <ChevronDownIcon />
                        </MenuButton>
                        <MenuList>
                            {jsonData.constantsData['BengaluruDirections'].map((item, index) => (
                                // index < 1 &&
                                <MenuItem key={index}>
                                    <Link href={`/results?q=${item.href}`}>
                                        {item.title}
                                    </Link>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Box>

                <Box display={['none', 'none', 'flex']} justifyContent='space-between' alignItems={'center'} gap='4' pr={'10'}>
                    <NavMenu />
                </Box>

                <Box display={['block', 'block', 'none']}>
                    <Box display={['flex']} alignItems='center'>
                        <HamburgerIcon
                            w='7' h='7'
                            onClick={onOpen}
                            display={['block', 'block', 'none']}
                            mr={'3'}
                        />
                    </Box>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
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
                                            src={'https://ik.imagekit.io/i66bfudbc/Sqrepng_meYXT9KXS_W-Tr1QHTj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660600918582'}
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
            </Box>

        </Box >
    );
}

export default Header;