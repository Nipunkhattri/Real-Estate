import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';

function PrivacyPolicypage() {
  return (
    <Box>
      <Header />
      <Box m='auto' p='2' w='90%' h='78vh' overflowY='auto'>
        <Heading textAlign={'center'} fontSize='6xl'>Privacy Policy</Heading>
        <Box pt='10' fontSize={'xl'}>
          This Privacy policy is subject to the terms of the Site Policy (User Agreement) of this website.
          The personal information provided by the users to us will not be provided to third parties without previous consent of the concerned user. Information of a general nature may however be revealed to external parties.

          Every effort shall be made to keep the information provided by the users in a safe manner, the information will be displayed on the website will be done so only after obtaining consent from the users.

          Any User browsing this website, is not required to disclose his identity or provide any of his information every time. It is only at the time of registration, the User is required to furnish the details in the registration form. You agree that Square Realty may use personal information provided by you to improve its marketing and promotional efforts, to analyze site usage, improve the Site's content and product offerings, and customize the Site's content, layout, and services. This shall further improve the website content and help us to tailor it to meet your needs, and to provide a smooth, efficient, safe and customized experience while using this website.

          You agree that Square Realty may use your personal information to contact you and deliver information to you that are targeted to your interests, such as targeted banner advertisements, administrative notices, product offerings, forum comments and reviews, your portfolio related updates, and communications relevant to your use of this website. By accepting this Privacy Policy, you explicitly agree to receive this information via SMS, Whatsapp, Email or Calls. If you do not wish to receive these communications, you may opt out of the receipt of certain communications in your profile. You may make changes to your profile at any time. It is the belief of Square Realty that privacy of a person can be best guaranteed by working in conjunction with the Law enforcement authorities.
        </Box>
      </Box>
    </Box>
  );
}

export default PrivacyPolicypage;