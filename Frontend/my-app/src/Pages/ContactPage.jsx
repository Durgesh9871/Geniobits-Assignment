import { Box, Input, Textarea } from '@chakra-ui/react'
import React from 'react'



const ContactPage = () => {

  const image = "https://media.istockphoto.com/id/1323765737/photo/close-up-of-a-businessman-using-a-laptop-computer-and-a-mobile-phone.jpg?s=612x612&w=0&k=20&c=a2jwh-IYmqgEYQKnzIoEncbNHISN2m2dAgP3JyMq_J8="
    
  return (
    <Box height="90vh"   backgroundImage={image} backgroundPosition="center" backgroundSize="cover" >

 {/* contact -----input for forms --------- */}
      <Box  shadow="2xl" background="#27272a" borderRadius="8px"  border="2px  #ffffff" height="auto" width={{base:"90%", sm: "65%", md: "50%", lg: "35%",xl: "35%",'2xl': "35%"}} p="20px" position="relative" left="5%"  top="25%">
  
  <Input placeholder='Type Receiver Email' width="90%"  focusBorderColor="white"  m="20px 0px" color="white"  />

  <Input placeholder='Type Sender Email' width="90%"  focusBorderColor="white" m="20px 0px" color="white" />

  <Textarea placeholder='Type your message...' width="90%" focusBorderColor="white" m="30px 0px" color="white" />

      </Box>
    </Box>
  )
}

export  {ContactPage}
