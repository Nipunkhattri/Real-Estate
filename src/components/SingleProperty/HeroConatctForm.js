import React, { useState } from "react";
import { Box, Heading, Input, useToast } from "@chakra-ui/react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { send } from "emailjs-com";

function HeroConatctForm(props) {
  const { data } = props;
  const [value, setValue] = useState();
  const toast = useToast();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(data.title, data._id);
    send(
      "service_mfmt19m",
      "template_4ox864j",
      {
        name: e.target.name.value,
        phone: e.target.phone.value,
        property_name: data?.title,
        property_id: data?._id,
      },
      "ZxR-1NTtKZfUhYaDf"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast({
          title: "Success",
          description: "Your query submitted successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  return (
    <Box
      display={["none", "none", "none", "block"]}
      m="5"
      p="2"
      pos="fixed"
      right="0"
      bgColor="whiteAlpha.700"
      w="400px"
      borderRadius="xl"
      boxShadow="md"
      zIndex="99999"
      transition="0.5s"
      display="none"
      _hover={
        {
            bgColor:"white"
        }
      }
      style={{
        "&:hover": {
          backgroundColor:"white"
        },
      }}
    >
      <Heading fontSize={"3xl"} textAlign="center" fontWeight="semibold">
        Pre-register here for best offers
      </Heading>
      <Box borderTop="1px solid #d9dbde" p="2">
        <form onSubmit={handleFormSubmit}>
          <Input
            name="name"
            m="1"
            bgColor="white"
            placeholder="Name"
            size="md"
          />
          <Box bgColor="white" p="2" borderRadius="md" m="1">
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="IN"
              value={value}
              onChange={setValue}
              padding="10px"
            />
          </Box>
          <Input type={"hidden"} name="phone" value={value} />
          <Input
            bgColor="black"
            color="white"
            _hover={{
              bgColor: "white",
              color: "black",
              border: "1px solid black",
            }}
            cursor={"pointer"}
            type={"submit"}
            value={"Submit Enquiry"}
            m="2"
          />
        </form>
      </Box>
      <Box>
        <Heading fontSize={"sm"} textAlign="center">
          Call us at +91 7090667009
        </Heading>
      </Box>
    </Box>
  );
}

export default HeroConatctForm;
