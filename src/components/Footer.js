import {
    Box,
    Text,
    useColorModeValue,
    Image,
    Link,
    SimpleGrid,
} from '@chakra-ui/react';
import logo from "./Assets/logo.png"


export default function Footer() {
    return (
        <>
            <Box
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}
                display='flex'
                alignItems='center'
                flexDir={['row']}
            >
                <Box>
                    <Link href="/">
                        <Image
                            boxSize={'100px'}
                            src={logo}
                            alt=''
                            objectFit='cover'
                            ml={['0', '0', '12']} />
                    </Link>
                </Box>
                <SimpleGrid
                    m='auto'
                    columns={[2, 7]}
                    placeItems={['left', 'center']}
                    gap='5px'>
                    <Link href='/about'>
                        <Box fontSize={['sm', 'md', 'xl']} fontWeight='bold' cursor={'pointer'}>
                            About Us
                        </Box>
                    </Link>
                    <Link href='/contact'>
                        <Box fontSize={['sm', 'md', 'xl']} fontWeight='bold' cursor={'pointer'}>
                            Contact Us
                        </Box>
                    </Link>
                    <Link href='/careers'>
                        <Box fontSize={['sm', 'md', 'xl']} fontWeight='bold' cursor={'pointer'}>
                            Careers
                        </Box>
                    </Link>
                    <Link href='/privacy'>
                        <Box fontSize={['sm', 'md', 'xl']} fontWeight='bold' cursor={'pointer'}>
                            Privacy Policy
                        </Box>
                    </Link>
                    <Link href='/disclaimer'>
                        <Box fontSize={['sm', 'md', 'xl']} fontWeight='bold' cursor={'pointer'}>
                            Disclaimer
                        </Box>
                    </Link>
                    <Link href='/list'>
                        <Box fontSize={['sm', 'md', 'xl']} fontWeight='bold' cursor={'pointer'}>
                            Properties
                        </Box>
                    </Link>
                    <Box bg={useColorModeValue('gray.50', 'gray.900')}
                        color={useColorModeValue('gray.700', 'gray.200')}
                        display={['none', 'none', 'flex']} gap='25px'
                        justifyContent={'center'}>
                        <Box>
                            <Image boxSize={'8'} src='https://ik.imagekit.io/i66bfudbc/instagram_m_wrGwbE9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662057694623'
                                alt='' />
                        </Box>
                        <Link href="https://www.facebook.com/squarerealty.sqre" isExternal>
                            <Image boxSize={'8'} src='https://ik.imagekit.io/i66bfudbc/facebook_iliZOpuN_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662057694769'
                                alt='' />
                        </Link>
                        <Box>
                            <Image boxSize={'8'} src='https://ik.imagekit.io/i66bfudbc/youtube_q5mPeKz0M.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662057694206'
                                alt='' />
                        </Box>
                    </Box>
                </SimpleGrid>
            </Box>
            <Box
                p='2'
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}
                display={['flex', 'flex', 'none']} gap='25px' justifyContent={'center'}>
                <Box>
                    <Image boxSize={'8'} src='https://ik.imagekit.io/i66bfudbc/instagram_m_wrGwbE9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662057694623'
                        alt='' />
                </Box>
                <Box>
                    <Link href="https://www.facebook.com/squarerealty.sqre" isExternal>
                        <Image boxSize={'8'} src='https://ik.imagekit.io/i66bfudbc/facebook_iliZOpuN_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662057694769'
                            alt='' />
                    </Link>
                </Box>
                <Box>
                    <Image boxSize={'8'} src='https://ik.imagekit.io/i66bfudbc/youtube_q5mPeKz0M.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662057694206'
                        alt='' />
                </Box>
            </Box>
            <Text py='2' fontSize={'sm'} textAlign='center' bgColor={'secondaryBg'} w='100%' color={'white'}>
                © 2022 Propmile Consulting. All rights reserved
            </Text>
        </>
    );
}