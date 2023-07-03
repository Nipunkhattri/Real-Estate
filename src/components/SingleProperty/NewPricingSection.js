import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useState } from 'react'
import PropertyPrice from './PropertyPrice';

function NewPricingSection(props) {
    const { data } = props
    const uniquePropertyTypes = new Set()
    data?.propertyDetails?.unit_and_price?.map((item) => {
        uniquePropertyTypes.add(item.type)
    })
    //upt means unique property types
    const upt = [...uniquePropertyTypes]
    return (
        <Box id='Price' m={['1', '2', '4']} p={['1', '2', '4']}
            borderRadius='md' boxShadow='xl' bgColor='white'
            display={'flex'}
            flexDir={['column']} >
            <Heading textAlign={'center'}>Unit Details</Heading>
            <Tabs isManual variant='enclosed'>
                <TabList>
                    {upt?.map((item, index) => (
                        <Tab _selected={{ color: 'white', bg: 'black' }}
                            _hover={{ color: 'white', bg: 'black' }}
                            _active={{ color: 'white', bg: 'black' }}
                            key={index}>
                            {item}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {upt?.map((uptItem, index) => (
                        <TabPanel key={index}>
                            <PropertyPrice
                             data={data?.propertyDetails?.unit_and_price} 
                             pType={uptItem}
                             logo={data?.propertyDetails?.logo_url} />
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default NewPricingSection