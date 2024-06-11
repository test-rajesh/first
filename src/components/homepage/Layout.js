import React from "react";
import { Outlet } from "react-router-dom";
import { Box, } from "@chakra-ui/react";
import "../../App.css";
import {Header, Footer} from "../../imports"
const Layout = () => {
  return (
   <Box  width="100%">
        <Header />
        <Outlet />
        <Footer/>
    </Box>
  );
};

export default Layout;
