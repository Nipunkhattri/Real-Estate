import React, { useState, forwardRef } from "react";
import './Autocomplete.css'
import { Box, Text, Input } from '@chakra-ui/react'

const SuggestionsListComponent = ({ showSuggestions, userInput, filteredSuggestions, activeSuggestion, onClick }) => {
    if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
            return (
                filteredSuggestions.map((suggestion, i) => {
                    return (
                        <Text
                        fontSize={['xs', 'sm', 'md']}
                            p='2'
                            className={i === activeSuggestion ? "suggestion-active" : ""}
                            key={suggestion.pid}
                            onClick={onClick}
                        >
                            {suggestion.title}
                        </Text>
                    );
                })

            );
        } else {
            return (
                <Text bgColor='white'>
                    <em>No suggestions, you're on your own!</em>
                </Text>
            );
        }
    }
}


function Autocomplete(props, ref) {
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [userInput, setUserInput] = useState("");

    const onChange = e => {
        const { suggestions } = props;
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        const localFS = suggestions.filter(
            suggestion =>
                suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );


        setActiveSuggestion(0);
        setFilteredSuggestions(localFS);
        setShowSuggestions(true);
        setUserInput(e.currentTarget.value);

    };

    const onClick = (e) => {
        setActiveSuggestion(0);
        setFilteredSuggestions([])
        setShowSuggestions(false);
        setUserInput(e.currentTarget.innerText);
        props.selected_pid(filteredSuggestions[activeSuggestion].pid)

    };

    const onKeyDown = e => {
        // User pressed the enter key
        if (e.keyCode === 13) {
            setActiveSuggestion(0)
            setShowSuggestions(false)
            setUserInput(filteredSuggestions[activeSuggestion].title)
            props.selected_pid(filteredSuggestions[activeSuggestion].pid)
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }
            setActiveSuggestion(ps => ps - 1);

        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }
            setActiveSuggestion(ps => ps + 1);
        }
    };

    return (
        <Box w='100%'>
            <Input
                bgColor='white' 
                type='text'
                placeholder='Search property name or locality'
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={userInput}
                ref={ref}
                size={['xs', 'sm', 'md']}
                w={['100%', '100%', '100%', '100%']}
            />
            <Box
                borderRadius='md'
                backgroundColor='white'
                maxHeight='100px'
                overflow='auto'
                css={{
                    '&::-webkit-scrollbar': {
                        width: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: "red",
                        borderRadius: '24px',
                    },
                }}
            >
                <SuggestionsListComponent
                    showSuggestions={showSuggestions}
                    userInput={userInput}
                    filteredSuggestions={filteredSuggestions}
                    activeSuggestion={activeSuggestion}
                    onClick={onClick}
                />
            </Box>
        </Box>
    )
}

export default forwardRef(Autocomplete)