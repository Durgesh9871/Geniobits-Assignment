import { Box  , Button, Heading, Text , Img} from '@chakra-ui/react'
import React from 'react'
import Carousel from 'better-react-carousel'
import slide1 from "../Images/slide1.jpg"
import slide2 from "../Images/slide2.jpg"
import "./home.css"
import "../Header/navbar.css"
import { Link } from 'react-router-dom'
import { Aboutus } from '../ComponentsHome/aboutus'
import {  MainBox } from '../ComponentsHome/MainBox'
import offer from "../Images/offer.jpg"
import about from "../Images/aboutus.jpg"



const HomePage = () => {


  const myDot = ({isActive})=>{
    return ( <span
     style={{
       display: 'inline-block',
 
       height : isActive ? "8px" :"6px" , 
       width: isActive ? "8px" :"6px " ,
       borderRadius:"50%" , 
       background: isActive ? "#266de8" :"#ccc" , 
     }}
   ></span> )
    }



  return (
    <Box border="2px  red"  >

     {/* carousel is here ---------- */}
     <Carousel cols={1} rows={1} gap={10} hideArrow={true} loop={true} showDots={true} dot = {myDot}   autoplay={2500} dotColorActive="#266de8">
      <Carousel.Item>
        <img height="40%" src={slide1} />
      </Carousel.Item>
      <Carousel.Item>
        <img height="40%" src={slide2} />
      </Carousel.Item>
     
  
      {/* ... */}
    </Carousel>
   
   {/*  Text inside carousel --------- */}
     {/* <Box position='absolute' shadow="base" zIndex="1"  top={{base:"68px", sm: "100px", md: "12%", lg: "15%",xl: "15%",'2xl': "17%"}} width="" right="6%" border="2px  red"  height="auto" p="15px">
      <Box width={{base:"155px", sm: "240px", md: "280px", lg: "300px",xl: "320px",'2xl': "320px"}} border="2px  red">
      <Text color="#0b589e" fontSize={{base:"8px", sm: "16px", md: "18px", lg: "24px",xl: "28px",'2xl': "28px"}} fontWeight="500"  mb="-2px">Now</Text>
      <Text color="#022d54" fontSize={{base:"10px", sm: "16px", md: "24px", lg: "32px",xl: "34px",'2xl': "36px"}} fontWeight="500" mb="4px" lineHeight={{base:"16px", sm: "16px", md: "21px", lg: "35px",xl: "35px",'2xl': "35px"}}>"Fulfillment of Your dreams"</Text>

      <Text color="#0b589e" fontSize={{base:"8px", sm: "16px", md: "18px", lg: "24px",xl: "28px",'2xl': "28px"}} fontWeight="500" mt="-8px">Real State Property!</Text>
      </Box>

      <Box border="1px  red" width={{base:"155px", sm: "240px", md: "280px", lg: "400px",xl: "400px",'2xl': "400px"}} lineHeight={{base:"13px", sm: "13px", md: "21px", lg: "21px",xl: "21px",'2xl': "21px"}}>
      <Text color="#000" fontSize={{base:"4px", sm: "12px", md: "14px", lg: "16px",xl: "18px",'2xl': "18px"}} fontWeight="500">Revolutionize the real estate industry with our innovative property</Text>

      <a target={"_blank"} href="https://geniobits.com/"><Button colorScheme='facebook'  size={{base:"sm", sm: "sm", md: "md", lg: "md",xl: "md",'2xl': "md"}}  fontWeight="400" borderRadius="4px" mt={{base:"0px",xl: "40px",'2xl': "40px" }} >Get More Info</Button> </a>
      </Box>
      
     </Box> */}

 
 {/*  zig - zag format started from here according to problem statement --------------------- */}
     {/*  About us section ------------------ */}

     < Aboutus />
      
      {/* third section  */}

     <MainBox />

      {/* Third section end here ---------- */}

      {/* fourth section  */}
      <Box height="auto" width="90%" m="20px auto"  p="10px" backgroundImage={offer} color="#ffffff" >

      <Heading fontWeight="400"  fontFamily="Raleway" textAlign="center">What We Offer</Heading>
  <Text  fontWeight="400" fontSize="15px" mt="12px" textAlign="center">Our customizable real estate solutions can be tailored to meet your unique needs, whether you need full or partial outsourcing.
.
 
 {/* main section */}
 <Box width="100%"   display="flex" p="10px" mt="10px"  flexDirection={{base:"column-reverse", sm: "column-reverse", md: "row", lg: "row",xl: "row",'2xl': "row"}}  >
 {/* image */}
 <Box border="1px  red" m={{base:"auto", md:"0px",lg:"0px" ,xl:"0px" ,"2xl":"0px"}} width={{base:"100%", sm: "80%", md: "50%", lg: "50%",xl: "50%",'2xl': "50%"}} p="25px" display="flex" justifyContent={{base:"center", sm: "center", md: "flex-end", lg: "flex-end",xl: "flex-end",'2xl': "flex-end"}} >
        <Img src={about} alt="about" width="auto" height={{base:"200px", sm: "350px", md: "250px", lg: "400px",xl: "400px",'2xl': "400px"}} />
   </Box>
  {/* details */}
  <Box border="1px  red" width={{base:"100%", sm: "100%", md: "50%", lg: "40%",xl: "40%",'2xl': "40%"}} p="15px" textAlign="left">
    <ul>
      <li><Text  fontWeight="400" fontSize="15px" >Free property evaluation for potential sellers.</Text></li>
      <li>   <Text  fontWeight="400" fontSize="15px" mt="15px" >Discounted commission rates for sellers or buyers who sign up with your agency.

</Text></li>
    <li>  <Text  fontWeight="400" fontSize="15px" mt="15px">Access to exclusive real estate listings not available to the general public.

</Text></li>
   <li><Text  fontWeight="400" fontSize="15px" mt="15px">Flexible payment options to make it easier for customers to complete transactions.
</Text></li>

<li><Text  fontWeight="400" fontSize="15px" mt="15px">First-time homebuyer incentives, such as reduced closing costs or down payment assistance.
</Text></li>

<li><Text  fontWeight="400" fontSize="15px" mt="15px">Virtual tours and 3D floor plans to help buyers get a better understanding of the property.

</Text></li>

<li><Text  fontWeight="400" fontSize="15px" mt="15px">Referral rewards for customers who refer their friends and family to your agency.
</Text></li>


    </ul>
  </Box>

 </Box>

</Text>

      </Box>

    </Box>
  )
}

export  {HomePage}
