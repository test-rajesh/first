import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";

const Login = () => {
  console.log("hello");
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="90%"
      flexDir="column"
    >
      <Box
        border="1px solid white"
        borderRadius="full"
        overflow="hidden"
        w="280px"
      >
        <Text p="3px" color="white" bg="black" textAlign="center">
          Name
        </Text>
        <Box>
          <Input
            placeholder="Enter your name..."
            _focus={{ border: "1px solid white", outline: "1px solid white" }}
            color="white"
            textAlign="center"
          />
        </Box>
      </Box>

      <Box
        border="1px solid white"
        mt="20px"
        borderRadius="full"
        overflow="hidden"
        w="280px"
      >
        <Text p="3px" color="white" bg="black" textAlign="center">
          Password
        </Text>
        <Box>
          <Input
            type="password"
            placeholder="Enter your password..."
            _focus={{ border: "1px solid white", outline: "1px solid white" }}
            color="white"
            textAlign="center"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
