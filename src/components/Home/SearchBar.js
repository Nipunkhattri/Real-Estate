import { Box, Button, Flex, Heading, Link, Select, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { fetchProperties } from '../../redux/reducers/properties.slice';
import { useNavigateSearch } from '../customHooks/useNavigateSearch';
import Autocomplete from './Autocomplete';
import { useSelector, useDispatch } from "react-redux";
import { Search2Icon } from '@chakra-ui/icons';
import jsonData from '../../constants/data.json';

function SearchBar() {
    const properties = useSelector(state => state.properties);
    const dispatch = useDispatch();
    const queryRef = useRef(null);
    const subqueryRef = useRef(null);
    const navigateSearch = useNavigateSearch();
    const [pid, setPid] = useState("");
    const goToResultPage = () => {
        navigateSearch(`/property/${pid}`);
    };
    let propertySuggestion = [];
    propertySuggestion = properties?.data?.properties?.map((p) => {
        return (
            {
                pid: p._id,
                title: p.title
            }
        );
    });
    useEffect(() => {
        dispatch(fetchProperties());
        //eslint-disable-next-line
    }, []);

    const locationFields = jsonData.constantsData['locationFields'];

    return (
        <Box bgColor='blackAlpha.600' p={['1', '1', '4']} w={['96%', '95%', '90%', '60%']}>
            <Heading size='md' mb={['1', '1', '4']} p='2' color='white'>Search for property</Heading>
            <Flex w='100%'
                justifyContent='center' alignItems={'center'} gap={['1', '1', '2']}>
                <Box w='30%' mr='2' display={['none', 'none', 'block']}>
                    <Select
                        bgColor='white' defaultValue='bangalore' ref={subqueryRef}>
                        <option value='bangalore'>Bangalore</option>
                    </Select>
                </Box>
                <Autocomplete
                    ref={queryRef}
                    suggestions={propertySuggestion}
                    selected_pid={(id) => { setPid(id); }}
                />
                <Button
                    size={['xs', 'sm', 'md']}
                    bgColor={'secondaryBg'}
                    color='white'
                    _hover={{ bgColor: 'white', color: 'secondaryBg', border: '1px solid #92B161' }}
                    onClick={goToResultPage}>
                    <Search2Icon marginRight={['0.5', '0.5', '2']} />Search
                </Button>
            </Flex>
            <Box color='white' display='flex' mt='2' alignItems='center' gap={['0', '2', '2', '3']}>
                <Text
                    fontSize={['10px', 'sm', 'md']}
                    fontWeight='bold' mr='1.5' >Explore :</Text>

                {locationFields?.map((item, i) => (
                    <Box key={i} display='flex' alignItems={'center'}>
                        <Link fontSize={['8px', 'xs', 'sm']}
                            href={`/results?q=${item.slug}`}>
                            {item.name}
                        </Link>
                        {i !== locationFields.length - 1 &&
                            <Box
                                ml={['2', '3', '4']}
                                mr={2}
                                fontSize={['8px', 'xs', 'sm']}>
                                |
                            </Box>
                        }
                    </Box>
                ))}

            </Box>
        </Box>
    );
}

export default SearchBar;