import { Box, Input } from '@chakra-ui/react'
import React from 'react'



const ContactPage = () => {

  const image = "https://media.istockphoto.com/id/1323765737/photo/close-up-of-a-businessman-using-a-laptop-computer-and-a-mobile-phone.jpg?s=612x612&w=0&k=20&c=a2jwh-IYmqgEYQKnzIoEncbNHISN2m2dAgP3JyMq_J8="
    
  return (
    <Box height="90vh"   backgroundImage={image} backgroundPosition="center" backgroundSize="cover" >

      <Box  border="2px solid red" height="50vh" width="50%">

      </Box>
  {/* <Input placeholder='Basic usage' /> */}
    </Box>
  )
}

export  {ContactPage}
