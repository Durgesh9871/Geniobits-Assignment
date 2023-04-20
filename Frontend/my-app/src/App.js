import { Box } from '@chakra-ui/react';
import React from 'react';
import MainNavbar from './Header/Navbar';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
      <Box>
        <MainNavbar />
        <AllRoutes />
      </Box>
  );
}

export default App;
