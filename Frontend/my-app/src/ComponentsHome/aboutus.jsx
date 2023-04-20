import { Box, Heading, Img , Text } from '@chakra-ui/react'
import React from 'react'
import about from "../Images/aboutus.jpg"

const Aboutus = () => {
  return (
    <Box border="1px  black" background="#f1f0f0" display="flex" flexDirection={{base:"column", sm: "column", md: "row", lg: "row",xl: "row",'2xl': "row"}} >
        {/* image box---- */}
        <Box border="1px  red" m={{base:"auto", md:"0px",lg:"0px" ,xl:"0px" ,"2xl":"0px"}} width={{base:"100%", sm: "80%", md: "50%", lg: "50%",xl: "50%",'2xl': "50%"}} p="25px" display="flex" justifyContent={{base:"center", sm: "center", md: "flex-end", lg: "flex-end",xl: "flex-end",'2xl': "flex-end"}}>
        <Img src={about} alt="about" width="auto" height={{base:"200px", sm: "350px", md: "300px", lg: "400px",xl: "400px",'2xl': "400px"}} />
        </Box>

        {/* detail box */}
        <Box border="1px  red" width={{base:"100%", sm: "100%", md: "50%", lg: "40%",xl: "40%",'2xl': "40%"}} p="15px" >
      <Heading color="#05a0e8" fontWeight="400" textAlign="center" borderBottom="1px solid #05a0e8" width="170px" m="auto"  p="5px" >About us</Heading>

      <Text color="#415B89" fontWeight="400" fontSize="15px" mt="12px">Welcome to Real State Property Deal, your go-to destination for all your real estate needs. We are a property startup that aims to revolutionize the way people buy, sell, and rent properties...</Text>
     
       <Text color="#415B89" fontWeight="400" fontSize="15px" mt="12px">Our team of experts has years of experience in the real estate industry, and we have a deep understanding of the market dynamics. We have combined our knowledge with the latest technologies to create a platform that is user-friendly, reliable, and efficient.</Text>
 
 <Text color="#415B89" fontWeight="400" fontSize="15px" mt="12px" >At Real State Property Deal, we believe that buying or selling a property should be a stress-free experience. That's why we have designed our platform to provide you with all the tools you need to make informed decisions. Whether you are a first-time buyer, a seasoned investor, or a property owner looking to sell your house, we have got you covered.</Text>

 <Text color="#415B89" fontWeight="400" fontSize="15px" mt="12px" >So why wait? Sign up for our platform today and start exploring the world of real estate like never before. Let Real State Property Deal be your partner in all your real estate transactions.</Text>
        </Box>

    </Box>
  )
}

export  {Aboutus}
