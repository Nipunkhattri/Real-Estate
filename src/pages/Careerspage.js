import { Box, Heading, Image, List, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';

function Careerspage() {
  return (
    <Box>
      <Header />
      <Box m='auto' p='2' w='90%' overflow='auto'>
        <Heading textAlign={'center'} fontSize='2xl' my='5'>Careers</Heading>
        <Image display='block' mx='auto' src='https://ik.imagekit.io/i66bfudbc/WhatsApp_Image_2022-09-14_at_11.34.54_PM_WcwkfRIn0.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1663178797027'
          alt='' />
        <Box pt='5' fontSize={'md'}>
          <Text>
            Propmile Consulting is a pioneer in the industry and for close to a decade, we have consistently been one of the Best Platforms for Top Quality Projects, Unbiased reviews, and Unmatched Customer Service. We’re looking to expand the Propmile Consulting team and are looking for the perfect candidates for the following roles.
          </Text>
          <Box>
            <Heading fontSize='5xl' color={'blackAlpha.600'} my='5'>Sales</Heading>
            <Box>
              <Heading my='4' fontWeight='light'>Job Requirements</Heading>
              <Text>
                Designation:  SALES (Analyst / Senior Analyst / Associate Consultant)
                <br />
                Job Location: Bangalore, Hyderabad
                <br />
                Pay Scale: As Per Industry Standards
                <br />
                Experience: 1-3 years of experience in a related field or Real Estate Channel Sales would be added advantage
                <br />
                Qualification: Any Graduation / BBM / MBA
              </Text>
            </Box>
            <Box>
              <Heading my='4' fontWeight='light'>Required Skills</Heading>
              <Text>
                <UnorderedList>
                  <ListItem>
                    Should be ambitious in Sales / Marketing / Business Development / Client Relations
                  </ListItem>
                  <ListItem>
                    Good Communication Skill, Good Behavior and Etiquettes
                  </ListItem>
                  <ListItem>
                    Go-Getter Attitude and Self-Motivated
                  </ListItem>
                  <ListItem>
                    Rapport Building
                  </ListItem>
                  <ListItem>
                    Active Listening and Focus on solving the problems
                  </ListItem>
                  <ListItem>
                    Proficiency in MS Office
                  </ListItem>
                  <ListItem>
                    Language Proficiency: English / Hindi (If known other languages would be an added advantage)
                  </ListItem>
                </UnorderedList>
              </Text>
            </Box>
            <Box>
              <Heading my='4' fontWeight='light'>KRAs</Heading>
              <UnorderedList>
                <ListItem>
                  Understanding the Core values of the company and its goals
                </ListItem>
                <ListItem>
                  Ability to understand client’s requirements and decent attitude towards providing precise information of the property to the clients (Humble in nature)
                </ListItem>
                <ListItem>
                  Field Sales Job / Escorting customers to the project site
                </ListItem>
                <ListItem>
                  Showcasing Properties as per the advice of their respective associate
                </ListItem>
                <ListItem>
                  Positive attitude for doing 2-3 meetings each day, for meeting new people, and someone who enjoys doing consulting
                </ListItem>
                <ListItem>
                  Should take a High level of passion and ownership
                </ListItem>
                <ListItem>
                  Maintaining good rapport with the builder
                </ListItem>
                <ListItem>
                  Should be aware of the Bangalore geography
                </ListItem>
                <ListItem>
                  Experience in real estate or any broker firm will be an added advantage
                </ListItem>
                <ListItem>
                  Must have Two-Wheeler with proper RT documents & Laptop
                </ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Heading my='4' fontWeight='light'>Work Schedule</Heading>
              <UnorderedList>
                <ListItem>
                  Should be ready to work on weekends
                </ListItem>
                <ListItem>
                  6 days a Week
                </ListItem>
                <ListItem>
                  Weekly off – one day on weekdays only (Tuesday)
                </ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Text>
                If you consider yourself best suited for the role, please mail your resume to us at rohitgarg.squarerealty@gmail.com
                <br />
                We look forward to hearing from you.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Careerspage;