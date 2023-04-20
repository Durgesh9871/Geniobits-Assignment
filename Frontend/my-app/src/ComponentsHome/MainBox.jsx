import React from 'react'
import { Box  , Button, Heading, Text , Img} from '@chakra-ui/react'
import MainImage from "../Images/MainBox.jpeg"

const MainBox = () => {
  return (
    <Box border='2px  red' height="auto" width="80%" m="20px auto"  p="10px">
    <Heading fontWeight="400" color="#46484A" fontFamily="Raleway">Discover your dream property with our innovative real estate listings.</Heading>
  <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="12px" >Our customizable real estate solutions can be tailored to meet your unique needs, whether you need full or partial outsourcing.</Text>
  
  {/* main section ---------------------------------------------------------Image box */}
  <Box width="100%" border="2px  black"  display="flex" p="10px" mt="10px"  flexDirection={{base:"column-reverse", sm: "column-reverse", md: "row", lg: "row",xl: "row",'2xl': "row"}}  >
{/*  description box -------------------------------- */}
  <Box width={{base:"100%" ,md:"50%" ,lg:"50%" ,xl:"50%" ,"2xl":"50%"}} border="2px  black" p="10px">
    <Text color="#7d7b7b" fontWeight="400" fontSize="15px" >Our solution offers a cost-effective and user-friendly platform for real estate professionals, providing advanced technology and techniques to streamline day-to-day operations. Our online site and applications eliminate the need for physical data movement, making data capture fast and flawless.</Text>
   <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px" >With precise planning and expert domain compliance, our solution simplifies the process for real estate agencies, business owners, and property owners. You no longer have to worry about keeping track of files, bills, or records, as all source documents can be checked instantly online.</Text>
  <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px">Our team of experts is assigned to work from various locations and at different times to ensure maximum efficiency and productivity. Say goodbye to the hassle of paperwork and physical data, and say hello to our innovative solution for the real estate industry."</Text>
  <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px" >Our solution also includes comprehensive reporting and analytics tools, allowing you to track and analyze your real estate performance and make data-driven decisions.</Text>
  <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px" >In addition, our solution offers top-notch security measures to ensure the confidentiality and safety of your data and transactions, giving you peace of mind in your real estate operations.</Text>
  </Box>

      {/* image box */}
      <Box width={{base:"100%",sm:"50%",md:"50%" ,lg:"50%" ,xl:"50%" ,"2xl":"50%"}} pb="5px" border="2px  black" m={{base:"auto" ,md:"0px" ,lg:"0px" ,xl:"0px" ,"2xl":"0px"}}>
 <Img src={MainImage} width="100%" alt="innovative" />
  </Box>

  </Box>
  
  </Box>
  )
}

export  {MainBox}
