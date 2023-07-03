import { Box, Button, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import PropertyCard from '../Cards/PropertyCard';
import { useNavigate } from 'react-router-dom';
import jsonData from '../../constants/data.json';

function CardsSection(props) {
    const navigate = useNavigate();
    const { data } = props;
    let properties = data.data.properties;
    let bangaloreEast = [];
    let bangaloreWest = [];
    let bangaloreNorth = [];
    let bangaloreSouth = [];
    let plotsAndVills = [];
    let underConstructionValue = 0;

    bangaloreEast = properties?.filter((p, i) => {
        return p.category === 'bangalore east';
    });

    bangaloreWest = properties?.filter((p, i) => {
        return p.category === 'bangalore west';
    });

    bangaloreNorth = properties?.filter((p, i) => {
        return p.category === 'bangalore north';
    });

    bangaloreSouth = properties?.filter((p, i) => {
        return p.category === 'bangalore south';
    });

    plotsAndVills = properties?.filter((p, i) => {
        return p.category !== 'bangalore east' && p.category !== 'bangalore north' && p.category !== 'bangalore south';
    });
    useEffect(() => {
    }, [data]);

    return (
        <Box w={'90%'} bgColor='white' color='btnPrimary' p='1' m='auto'>
            <Box display='flex'
                mb='2'
                gap={'2'}
                justifyContent='space-between' alignItems='center'>
                <Box color={'primaryText'}>
                    <Heading
                        fontSize={['sm', 'md', 'lg', '5xl']}
                    >
                        Best Real Estate Deals
                    </Heading>
                </Box>
                <Button
                    w={['50%', 'fit-content', 'fit-content']}
                    size={['xs', 'md', 'lg']}
                    bgColor={'secondaryBg'} color='white'
                    _hover={{ color: 'secondaryBg', bgColor: 'white', border: '1px solid #1D358F' }}
                    onClick={() => navigate('/list', { state: data })}>
                    View all properties
                </Button>
            </Box>
            <Tabs variant='enclosed-colored'>
                <TabList color={'primaryText'}>
                    {jsonData.constantsData['BengaluruDirections'].map((item, index) => (
                        <Tab
                            key={index}
                            fontSize={['8px', 'sm', 'md']}
                            fontWeight={'semibold'}
                            _selected={{ color: 'white', bg: 'secondaryBg' }}
                            _hover={{ color: 'white', bg: 'secondaryBg' }}
                            _active={{ color: 'white', bg: 'secondaryBg' }}>
                            {item.title}
                        </Tab>
                    ))}

                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Tabs variant='enclosed-colored'>
                            <TabList
                                color={'primaryText'} display='flex' flexDir={['column', 'column', 'row']}>
                                {jsonData.constantsData['subHeadingTabs'].map((item, index) => (
                                    <Tab
                                        key={index}
                                        _selected={{ color: 'white', bg: 'secondaryBg' }}
                                        _hover={{ color: 'white', bg: 'secondaryBg' }}
                                        _active={{ color: 'white', bg: 'secondaryBg' }}
                                    >
                                        {item}
                                    </Tab>
                                ))}
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreEast?.map((p, i) => {
                                            if (p.subcategory === "upcoming" && i < 6) {
                                                return (
                                                    <PropertyCard key={i} data={p} />
                                                );
                                            }
                                        })}
                                    </SimpleGrid>
                                </TabPanel>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreEast?.map((p, l) => {
                                            if (p.subcategory === "new launch" && l < 6) {
                                                return (
                                                    <PropertyCard key={l} data={p} />
                                                );
                                            }
                                        })}
                                    </SimpleGrid>
                                </TabPanel>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreEast?.map((p, i) => {
                                            if (p.subcategory === "under construction" && i < 6) {
                                                return (
                                                    <PropertyCard key={i} data={p} />
                                                );
                                            }
                                        })}
                                    </SimpleGrid>
                                </TabPanel>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreEast?.map((p, i) => {
                                            if (p.subcategory === "ready to move in" && i < 6) {
                                                underConstructionValue++;
                                                return (
                                                    <PropertyCard key={i} data={p} />
                                                );
                                            }
                                        })}
                                    </SimpleGrid>
                                </TabPanel>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreEast?.map((p, i) => {
                                            if (p.subcategory === "exclusive offers" && i < 6) {
                                                underConstructionValue++;
                                                return (
                                                    <PropertyCard key={i} data={p} />
                                                );
                                            }
                                        })}
                                    </SimpleGrid>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        <Tabs variant={'enclosed-colored'}>
                            <TabList
                                color={'primaryText'}
                                display='flex' flexDir={['column', 'column', 'row']}>
                                {jsonData.constantsData['subHeadingTabs'].map((item, index) => (
                                    <Tab
                                        key={index}
                                        _selected={{ color: 'white', bg: 'secondaryBg' }}
                                        _hover={{ color: 'white', bg: 'secondaryBg' }}
                                        _active={{ color: 'white', bg: 'secondaryBg' }}
                                    >
                                        {item}
                                    </Tab>
                                ))}
                            </TabList>
                            <TabPanels color={'primaryText'}>
                                <TabPanel>
                                    {bangaloreWest?.map((p, i) => {
                                        if (p.subcategory === "upcoming" && i < 6) {
                                            underConstructionValue++;
                                            return (
                                                <PropertyCard key={i} data={p} />
                                            );
                                        }
                                    })}
                                    {underConstructionValue === 0 &&
                                        <Box
                                            display={'flex'} alignItems={'center'} justifyContent={'center'}
                                            mt={5}
                                            fontSize={'xl'}
                                            color={'black'}
                                        >
                                            Coming Soon...
                                        </Box>
                                    }
                                </TabPanel>
                                <TabPanel>
                                    {bangaloreWest?.map((p, i) => {
                                        if (p.subcategory === "new launch" && i < 6) {
                                            underConstructionValue++;
                                            return (
                                                <PropertyCard key={i} data={p} />
                                            );
                                        }
                                    })}
                                    {underConstructionValue === 0 &&
                                        <Box
                                            display={'flex'} alignItems={'center'} justifyContent={'center'}
                                            mt={5}
                                            fontSize={'xl'}
                                            color={'black'}
                                        >
                                            Coming Soon...
                                        </Box>
                                    }
                                </TabPanel>
                                <TabPanel>
                                    {bangaloreWest?.map((p, i) => {
                                        if (p.subcategory === "under construction" && i < 6) {
                                            underConstructionValue++;
                                            return (
                                                <PropertyCard key={i} data={p} />
                                            );
                                        }
                                    })}
                                    {underConstructionValue === 0 &&
                                        <Box
                                            display={'flex'} alignItems={'center'} justifyContent={'center'}
                                            mt={5}
                                            fontSize={'xl'}
                                            color={'black'}
                                        >
                                            Coming Soon...
                                        </Box>
                                    }
                                </TabPanel>
                                <TabPanel>
                                    {bangaloreWest?.map((p, i) => {
                                        if (p.subcategory === "ready to move in" && i < 6) {
                                            underConstructionValue++;
                                            return (
                                                <PropertyCard key={i} data={p} />
                                            );
                                        }
                                    })}
                                    {underConstructionValue === 0 &&
                                        <Box
                                            display={'flex'} alignItems={'center'} justifyContent={'center'}
                                            mt={5}
                                            fontSize={'xl'}
                                            color={'black'}
                                        >
                                            Coming Soon...
                                        </Box>
                                    }
                                </TabPanel>
                                <TabPanel>
                                    {bangaloreWest?.map((p, i) => {
                                        if (p.subcategory === "exclusive offers" && i < 6) {
                                            underConstructionValue++;
                                            return (
                                                <PropertyCard key={i} data={p} />
                                            );
                                        }
                                    })}
                                    {underConstructionValue === 0 &&
                                        <Box
                                            display={'flex'} alignItems={'center'} justifyContent={'center'}
                                            mt={5}
                                            fontSize={'xl'}
                                            color={'black'}
                                        >
                                            Coming Soon...
                                        </Box>
                                    }
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        <Tabs variant={'enclosed-colored'}>
                            <TabList
                                color={'primaryText'}
                                display='flex' flexDir={['column', 'column', 'row']}>
                                {jsonData.constantsData['subHeadingTabs'].map((item, index) => (
                                    <Tab
                                        key={index}
                                        _selected={{ color: 'white', bg: 'secondaryBg' }}
                                        _hover={{ color: 'white', bg: 'secondaryBg' }}
                                        _active={{ color: 'white', bg: 'secondaryBg' }}
                                    >
                                        {item}
                                    </Tab>
                                ))}
                            </TabList>
                            <TabPanels color={'primaryText'}>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreNorth?.map((p, i) => {
                                            if (p.subcategory === "upcoming" && i < 6) {
                                                underConstructionValue++;
                                                return (
                                                    <PropertyCard key={i} data={p} />
                                                );
                                            }
                                        })}
                                        {underConstructionValue === 0 &&
                                            <Box
                                                display={'flex'} alignItems={'center'} justifyContent={'center'}
                                                mt={5}
                                                fontSize={'xl'}
                                                color={'black'}
                                            >
                                                Coming Soon...
                                            </Box>
                                        }
                                    </SimpleGrid>
                                </TabPanel>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreNorth?.map((p, i) => {
                                            if (p.subcategory === "new launch" && i < 6) {
                                                underConstructionValue++;
                                                return (
                                                    <PropertyCard key={i} data={p} />
                                                );
                                            }
                                        })}
                                        {underConstructionValue === 0 &&
                                            <Box
                                                display={'flex'} alignItems={'center'} justifyContent={'center'}
                                                mt={5}
                                                fontSize={'xl'}
                                                color={'black'}
                                            >
                                                Coming Soon...
                                            </Box>
                                        }
                                    </SimpleGrid>
                                </TabPanel>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreNorth?.map((p, i) => {
                                            if (p.subcategory === "under construction" && i < 6) {
                                                underConstructionValue++;
                                                return (
                                                    <PropertyCard key={i} data={p} />
                                                );
                                            }
                                        })}
                                        {underConstructionValue === 0 &&
                                            <Box
                                                display={'flex'} alignItems={'center'} justifyContent={'center'}
                                                mt={5}
                                                fontSize={'xl'}
                                                color={'black'}
                                            >
                                                Coming Soon...
                                            </Box>
                                        }
                                    </SimpleGrid>
                                </TabPanel>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreNorth?.map((p, i) => {
                                            if (p.subcategory === "ready to move in" && i < 6) {
                                                underConstructionValue++;
                                                return (
                                                    <PropertyCard key={i} data={p} />
                                                );
                                            }
                                        })}
                                    </SimpleGrid>
                                </TabPanel>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreNorth?.map((p, i) => {
                                            if (p.subcategory === "exclusive offers" && i < 6) {
                                                underConstructionValue++;
                                                return (
                                                    <PropertyCard key={i} data={p} />
                                                );
                                            }
                                        })}
                                    </SimpleGrid>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        <Tabs variant={'enclosed-colored'}>
                            <TabList color={'primaryText'} display='flex' flexDir={['column', 'column', 'row']}>
                                {jsonData.constantsData['subHeadingTabs'].map((item, index) => (
                                    <Tab
                                        key={index}
                                        _selected={{ color: 'white', bg: 'secondaryBg' }}
                                        _hover={{ color: 'white', bg: 'secondaryBg' }}
                                        _active={{ color: 'white', bg: 'secondaryBg' }}
                                    >
                                        {item}
                                    </Tab>
                                ))}
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreSouth?.map((p, i) => {
                                            if (p.subcategory === "upcoming" && i < 6) {
                                                return (
                                                    <PropertyCard key={i} data={p} />
                                                );
                                            }
                                        })}
                                    </SimpleGrid>
                                </TabPanel>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreSouth?.map((p, i) => {
                                            if (p.subcategory === "new launch" && i < 6) {
                                                return (
                                                    <PropertyCard key={i} data={p} />
                                                );
                                            }
                                        })}
                                    </SimpleGrid>
                                </TabPanel>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreSouth?.map((p, i) => {
                                            if (p.subcategory === "under construction" && i < 6) {
                                                return (
                                                    <PropertyCard key={i} data={p} />
                                                );
                                            }
                                        })}
                                    </SimpleGrid>
                                </TabPanel>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreSouth?.map((p, i) => {
                                            if (p.subcategory === "ready to move in" && i < 6) {
                                                return (
                                                    <PropertyCard key={i} data={p} />
                                                );
                                            }
                                        })}
                                    </SimpleGrid>
                                </TabPanel>
                                <TabPanel>
                                    <SimpleGrid placeItems={'center'} columns={[1, 1, 2, 3]} spacingX='40px' spacingY='20px'>
                                        {bangaloreSouth?.map((p, i) => {
                                            if (p.subcategory === "exclusive offers" && i < 6) {
                                                return (
                                                    <PropertyCard key={i} data={p} />
                                                );
                                            }
                                        })}
                                    </SimpleGrid>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box >
    );
}

export default CardsSection;