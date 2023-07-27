import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Heading, Image, Link, LinkBox, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from '@chakra-ui/react';
import React,{useEffect,useState} from 'react';
import jsonData from '../constants/data.json';
import logo from "./Assets/logo.png"
import axios from 'axios'
import { setLogout } from "../../src/redux/reducers/authslice";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
        <Link href='/signup'>
            <Text fontSize='xl'>
                Login
            </Text>
        </Link>
    </>
);

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name,setname] = useState('')
    const { isAuthenticated } = useSelector((state) => ({ ...state.authSlice }));
    const {user} = useSelector((state) => ({...state.authSlice}));
    useEffect(()=>{
        setname(user?.data?.result?.Name);
    },[user])

    console.log(name)
    console.log(isAuthenticated);

    const logout = ()=>{
        dispatch(setLogout());
        navigate("/signup")
        toast.success("Logout successfully")
      }

    return (
        <Box position={'sticky'} top='0' zIndex={'1000'}
            boxShadow='dark-lg'
            bgColor={'white'} display={'flex'} alignItems={'center'}
        >

            <Link href="/">
                <Image
                    width="80px"
                    m='0'
                    src={logo}
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
                    {
                        isAuthenticated?
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
        <Link href='/'>
            <Text fontSize='xl'>
                Welcome({name})
            </Text>
        </Link>
        <Link href='/'>
            <Text fontSize='xl' onClick={logout}>
                Logout
            </Text>
        </Link>
                       </>:
                        <NavMenu />
                    }
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
                                            src={logo}
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