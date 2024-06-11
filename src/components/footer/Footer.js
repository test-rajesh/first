import { Box, Button, Divider, Image, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import Icn from "../../utils/icon.jpg";
import { Icon } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Box bg="#4A5D23" mt="5px" h="350px">
      <Box
        h="100%"
        bgGradient="radial(#00000081, #000000)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir={{ md: "row", base: "column" }}
      >
        <Box
          w={{ md: "50%", base: "100%" }}
          h="100%"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir={{ md: "row", base: "column" }}
        >
          <Image src={Icn} alt="icon" h={{ md: "100px", base: "60px" }} />

          <Box>
            <Box display="flex" alignItems="center" flexDir="col" m="5px">
              <Icon as={EmailIcon} />
              <Text ml="5px">khajuriarajesh768@gmail.com</Text>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              w="100%"
              justifyContent="center"
              flexDir="col"
              m="5px"
            >
              <Icon as={PhoneIcon} />
              <Text ml="5px">+91 7889589592</Text>
            </Box>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          h="80%"
          display={{ md: "block", base: "none" }}
        />
        <Divider w="80%" display={{ md: "none", base: "block" }} />
        <Box
          w={{ md: "50%", base: "100%" }}
          h="100%"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          <Text fontFamily="Kanit" fontSize={{ md: "40px", base: "30px" }}>
            Comment here...
          </Text>
          <Text textAlign="center" fontSize={{ md: "20px", base: "15px" }}>
            Your feedback can lead to our better performance.
          </Text>
          <Box
            h="85px"
            w="70%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Textarea
              m="5px"
              _focus={{
                bg: "green.100",
                color: "darkGreen",
                border: "1px solid white",
                outline: "1px solid white",
              }}
              placeholder="Please leave a comment..."
            />
            <Button h="80px">
              <Icon as={ArrowRightIcon} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
