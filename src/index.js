import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import ChatContextProvider from "./Context/AppContextProvider";
import reportWebVitals from './reportWebVitals';


const routerr = router;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChatContextProvider>
    <ChakraProvider>
      <RouterProvider router={routerr} />
    </ChakraProvider>
  </ChatContextProvider>
);
reportWebVitals();
