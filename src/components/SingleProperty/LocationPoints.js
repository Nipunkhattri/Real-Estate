import { Box, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

function LocationPoints(props) {
    const { data } = props;
    return (
        <SimpleGrid columns={[2, 2, 2]} placeItems='center' spacing='10px'>
            <GridItem h={['350px', '350px', '100%']}>
                <Heading textAlign='center'>Hospital</Heading>
                {data?.hospital.map((item, index) => (
                    <Text key={index} my='2'>
                        {item}
                    </Text>
                ))}
            </GridItem>
            <GridItem h={['350px', '350px', '100%']}>
                <Heading textAlign='center'>Schools</Heading>
                {data?.schools.map((item, index) => (
                    <Text key={index} my='2'>
                        {item}
                    </Text>
                ))}
            </GridItem>
            <GridItem h={['350px', '350px', '100%']}>
                <Heading textAlign='center' mt='3'>Landmarks</Heading>
                {data?.landmarks.map((item, index) => (
                    <Text key={index} my='2'>{item}</Text>
                ))}
            </GridItem>
            <GridItem h={['350px', '350px', '100%']}>
                <Heading textAlign='center' mt='3'>Nearby</Heading>
                {data?.nearby.map((item, index) => (
                    <Text key={index} my='2'>{item}</Text>
                ))}
            </GridItem>
        </SimpleGrid>
    );
}

export default LocationPoints;