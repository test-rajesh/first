import { Box, Image, Text } from "@chakra-ui/react";
import Img from "../../utils/icon.jpg";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../App.css"

const Header = () => {
  return (
    <Box
      position="absolute"
      display={"flex"}
      justifyContent="space-between"
      alignItems="center"
      p="5px 10px 5px 10px"
      height="80px"
      width="100%"
      color="white"
    >
      <Link to="/">
        <Image
          borderRadius="full"
          boxSize="60px"
          src={Img}
          alt="icon"
          marginStart="20px"
          cursor="pointer"
          h={{ md: "75px", base: "60px" }}
          w={{ md: "75px", base: "60px" }}
        />
      </Link>

      <Box
        display="flex"
        marginEnd={{md:"5%",base:"2.5%"}}
        justifyContent="center"
        alignItems="center"
        fontWeight="bold"
      >
        <NavLink
          to={`authentication/login`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : "init"
          }
        >
          <Text fontSize={{ md: "25px" }}>login</Text>
        </NavLink>
        <NavLink
          to={`authentication/signup`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : "init"
          }
        >
          <Text fontSize={{ md: "25px" }}>Sign-up</Text>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Header;
