import { Box } from '@chakra-ui/react';
import React from 'react';
import MainNavbar from './Header/Navbar';
import AllRoutes from './Routes/AllRoutes';
import { Footer } from './Footer/Footer';


function App() {
  return (
      <>
        {/* nav bar ------------ */}
        <MainNavbar />
        {/* routes ------ */}
        <AllRoutes />

      {/* footer ------- */}
      <Footer />
      </>
  );
}

export default App;
