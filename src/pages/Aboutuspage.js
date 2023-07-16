import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';

function Aboutuspage() {
    return (
        <>
            <Header />
            <Box m='auto' p='2' w='90%' minH='80vh'>
                <Heading textAlign={'center'} fontSize='4xl' mt='4'>About Us</Heading>
                <Box pt='10' fontSize={'xl'}>
                    Propmile Consulting is a Portal which showcases flagship projects of Top Real Estate Brands & provides 360° assistance to Property Seekers to find the best properties.

                    Starting as a niche platform for homebuyers to review & request advice on their preferred properties, Propmile Consulting is now a pioneer of the holistic online Real Estate genre and leading the way for today’s Smart, Tech-enabled generation to find their dream home.

                    Times may have changed, but the mission has always remained the same – unbiased reviews and invaluable insights to all home buyers.
                    To Serve… To Guide… To Help…

                    - We are here to serve the common Indian in finding their right nest !!!
                    <Heading py='5'>What we do</Heading>
                    - Advise customers on Property purchases and guide them through the entire property journey
                    - Help customers on which property best suits their individual and family needs
                    - Arrange site visits with one of our experienced Sales Executives
                    - Provide best deals and rates to our customers
                    - Advise on Home loans and help through the application process

                    <Heading py='5'>Where we can help</Heading>
                    - Helping customers to find the suitable property at the best price
                    - Investment advice to safe guard customers hard earned money
                    - Advising on the best Home rates in market
                    - Assisting customers on documentation / property registration
                    - Being the conduit between Buyer and Builder
                    - Advising customers on different phases of property purchase lifecycle
                    - Legal advice/Notary to review and authenticate property documentation
                </Box>
            </Box>
        </>
    );
}

export default Aboutuspage;