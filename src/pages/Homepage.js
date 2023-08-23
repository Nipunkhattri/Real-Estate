import { Box, GridItem, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';
import CardsSection from '../components/Home/CardsSection';
import HeroSection from '../components/Home/HeroSection';
import NewLaunchedProjects from '../components/Home/NewLaunchedProjects';
import NewLaunchSlider from '../components/Home/NewLaunchSlider';
import ChatBot from '../components/SingleProperty/ChatBot';

function Homepage(props) {
    const { data, ad } = props;
    return (
        <>
            <Header />
            <HeroSection />
            <ChatBot/>
            <Box display={['block']} w='100%'>
                {data && <NewLaunchSlider data={data} />}
            </Box>
            <Box display={['none', 'none', 'block', 'block']}>
                {ad && <NewLaunchedProjects ad1={ad[0]} ad2={ad[1]} />}
            </Box>
            <CardsSection data={props.data} />
            <Box display={['block', 'block', 'none', 'none']}>
                {ad && <NewLaunchedProjects ad1={ad[0]} ad2={ad[1]} />}
            </Box>
            <Box m='2' display={['block', 'block', 'block', 'block']}>
                <SimpleGrid columns={['4']} spacing='4'>
                    <GridItem>
                        <Image w='320px' h='100px'
                            objectFit='contain' src='https://ik.imagekit.io/i66bfudbc/Builder_Logo/logo__1__8vwNAVKU2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658903425812' alt='' />
                    </GridItem>
                    <GridItem>
                        <Image w='320px' h='100px'
                            objectFit='contain' src='https://ik.imagekit.io/i66bfudbc/Builder_Logo/bg-logo-hz_m0DOOJO5T.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658903584402' alt='' />
                    </GridItem>
                    <GridItem>
                        <Image w='320px' h='100px'
                            objectFit='contain' src='https://ik.imagekit.io/i66bfudbc/Builder_Logo/godrej-properties-logo_2519F03vL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658903493456' alt='' />
                    </GridItem>
                    <GridItem>
                        <Image w='320px' h='100px'
                            objectFit='contain' src='https://ik.imagekit.io/hp4i1dxyi/Sobha_Dream_Acres/Sobha_Developers_Ltd._Corporate_Logo_JDHl5YTjL.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655374440075' alt='' />
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    );
}

export default Homepage;