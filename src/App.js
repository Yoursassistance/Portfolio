import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Service from "./Pages/Service";
import Portfolio from "./Pages/Portfolio";
import Reviews from "./Pages/Reviews";
import ContactUs from "./Pages/ContactUs";
import BookAppointment from "./Pages/BookAppointment";



function App() {
  const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          fontFamily: "Montserrat, sans-serif",
        },
      },
    },
    
  });


 

 
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<Service />} path="services" />
          <Route element={<Portfolio />} path="portfolio" />
          <Route element={<Reviews />} path="reviews" />
          <Route element={<ContactUs />} path="contact-us" />
          <Route element={<BookAppointment />} path="book-appointment" />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
