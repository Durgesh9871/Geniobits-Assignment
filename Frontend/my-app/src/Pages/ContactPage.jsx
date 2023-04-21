import { Box, Button, FormControl, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'



const ContactPage = () => {
  const [state , setState] = useState({
    to:"" ,
    from:"" ,
    text :"",
  })
 
  const handleChange = (e)=>{
   const {name , value} = e.target 
   setState({
    ...state  , 
    [name]:value 
   })
  }
// console.log(state ,"state")

  const image = "https://media.istockphoto.com/id/1323765737/photo/close-up-of-a-businessman-using-a-laptop-computer-and-a-mobile-phone.jpg?s=612x612&w=0&k=20&c=a2jwh-IYmqgEYQKnzIoEncbNHISN2m2dAgP3JyMq_J8="
    
  return (
    <Box height="90vh"   backgroundImage={image} backgroundPosition="center" backgroundSize="cover" >

 {/* contact -----input for forms --------- */}
      <Box  shadow="2xl" background="#27272a" borderRadius="8px"  border="2px  #ffffff" height="auto" width={{base:"90%", sm: "60%", md: "45%", lg: "35%",xl: "30%",'2xl': "30%"}} p="20px" position="relative" left="5%"  top="20%">
  
  <FormControl isRequired>
  <Input placeholder='Type Receiver Email' width="100%"  focusBorderColor="white"  m="20px 0px" color="white" name="to"  value={state.to} onChange={handleChange} />
</FormControl>

  <Input placeholder='devisingh9871686098@gmail.com' width="100%"  focusBorderColor="white" m="20px 0px" color="white" name="from"  value={state.from}  />

  <FormControl isRequired>
  <Textarea placeholder='Type your message...' width="100%" focusBorderColor="white" m="30px 0px" color="white" name="text" value={state.text} onChange={handleChange} />
   </FormControl>

   <Button colorScheme='facebook' m="30px 0px" width="100%">Send </Button>
    
      </Box>
    </Box>
  )
}

export  {ContactPage}
