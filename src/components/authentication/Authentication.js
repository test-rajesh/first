import { Box, Divider, Text } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Authentication = () => {
  return (
    <Box h="99vh" bg="#4A5D23">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100%"
        bgGradient="radial(#00000011, #00000090)"
      >
        <Box h="500px" w="45%" display={{ md: "block", base: "none" }}></Box>
        <Box
          h="500px"
          border="1px solid white"
          boxShadow="dark-lg"
          w={{ md: "45%", base: "95%" }}
        >
          <Box display="flex" justifyContent="space-around" color="white" p="5px">
            <NavLink
              to={`login`}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : "init"
              }
            >
              <Text fontSize={{ md: "25px" }}>login</Text>
            </NavLink>
            <NavLink
              to={`signup`}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : "init"
              }
            >
              <Text fontSize={{ md: "25px" }}>Sign-up</Text>
            </NavLink>
                  </Box>
                  <Divider mt="10px" ml="10%" w="80%" />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Authentication;
