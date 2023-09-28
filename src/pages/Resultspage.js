import { Box, Heading, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import PropertyCard from '../components/Cards/PropertyCard';
import Fuse from 'fuse.js';
import Header from '../components/Header';
import { useEffect } from 'react';

function Resultspage(props) {
    const { data } = props;
    console.log(data)
    let propData = data.data.properties || [{}];
    let bangaloreEast = [];
    let bangaloreWest = [];
    let bangaloreNorth = [];
    let bangaloreSouth = [];

    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get("q");

    const fuse = new Fuse(propData, {
        includeScore: false,
        useExtendedSearch: true,
        keys: ['location', 'category']
    });

    propData = fuse.search(`'${term}`);
    bangaloreEast = propData?.filter((p, i) => {
        return p.category === 'bangalore east';
    });
    console.log(bangaloreEast)

    bangaloreWest = propData?.filter((p, i) => {
        return p.category === 'bangalore west';
    });

    bangaloreNorth = propData?.filter((p, i) => {
        return p.category === 'bangalore north';
    });

    bangaloreSouth = propData?.filter((p, i) => {
        return p.category === 'bangalore south';
    });

    useEffect(() => {
        console.log('first')
    }, [propData]);
    return (
        <>
            <Header />
            <Heading my={10} textAlign='center' fontSize='xl'>
                {propData?.length} search results for <Text color='blue'>{term}</Text>
            </Heading>
            <Box
                my='4' p='4'
                textAlign={'center'}>
                <Tabs variant='enclosed-colored'>
                    {/* <TabList>
                        <Tab fontSize={['10px', 'sm', 'md']}
                            fontWeight={'semibold'}
                            _selected={{ color: 'white', bg: 'secondaryBg' }}
                            _hover={{ color: 'white', bg: 'secondaryBg' }}
                            _active={{ color: 'white', bg: 'secondaryBg' }}>Bangalore East</Tab>
                        <Tab fontSize={['10px', 'sm', 'md']}
                            fontWeight={'semibold'}
                            _selected={{ color: 'white', bg: 'secondaryBg' }}
                            _hover={{ color: 'white', bg: 'secondaryBg' }}
                            _active={{ color: 'white', bg: 'secondaryBg' }}>Bangalore West</Tab>
                        <Tab fontSize={['10px', 'sm', 'md']}
                            fontWeight={'semibold'}
                            _selected={{ color: 'white', bg: 'secondaryBg' }}
                            _hover={{ color: 'white', bg: 'secondaryBg' }}
                            _active={{ color: 'white', bg: 'secondaryBg' }}>Bangalore North</Tab>
                        <Tab fontSize={['10px', 'sm', 'md']}
                            fontWeight={'semibold'}
                            _selected={{ color: 'white', bg: 'secondaryBg' }}
                            _hover={{ color: 'white', bg: 'secondaryBg' }}
                            _active={{ color: 'white', bg: 'secondaryBg' }}>Bangalore South</Tab>
                    </TabList> */}
                    {/* <TabPanels>
                        <TabPanel> */}
                            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                                {propData?.map((item, i) => (
                                    item.item?.category === 'Bangalore east' || item.item?.category === 'bangalore east' ) && (
                                        <PropertyCard data={item?.item} key={i} />
                                    ))}
                            </SimpleGrid>
                        {/* </TabPanel>
                        <TabPanel> */}
                            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                                {bangaloreWest?.map((item, i) => (
                                    item.item?.category === 'bangalore west') && (
                                        <PropertyCard data={item.item} key={i} />
                                    ))}
                            </SimpleGrid>
                        {/* </TabPanel>
                        <TabPanel> */}
                            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                                {bangaloreNorth?.map((item, i) => (
                                    item.item?.category === 'bangalore north') && (
                                        <PropertyCard data={item.item} key={i} />
                                    ))}
                            </SimpleGrid>
                        {/* </TabPanel>
                        <TabPanel> */}
                            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                                {propData?.map((item, i) => (
                                    item.item?.category === 'bangalore south') && (
                                        <PropertyCard data={item.item} key={i} />
                                    ))}
                            </SimpleGrid>
                        {/* </TabPanel>
                    </TabPanels> */}
                </Tabs>
            </Box>
        </>
    );
}

export default Resultspage;