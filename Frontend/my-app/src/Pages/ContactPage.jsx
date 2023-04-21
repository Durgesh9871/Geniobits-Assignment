import { Box, Button, FormControl, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'


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
// for sending email --------------
// 4df665f5-9ae8-4d44-95c6-c5b2bce25b5a -- token we get from smptjs.com
 

const handleForm = ()=>{
console.log(state ,"satte")
  const config = {
    SecureToken : "4df665f5-9ae8-4d44-95c6-c5b2bce25b5a",
     To :  state.to ,
    From : "devisingh9871686098@gmail.com" ,
    Subject : "Interested in this property",
    Body : state.text
   }
console.log(config ,"config")
  if(window.Email){
    window.Email.send(config).then(()=> alert('Email Sent')).then(()=> {
      setState({
        to:"" ,
        from :"",
        text:""
      })
    })
  }


  
}

  const image = "https://media.istockphoto.com/id/1323765737/photo/close-up-of-a-businessman-using-a-laptop-computer-and-a-mobile-phone.jpg?s=612x612&w=0&k=20&c=a2jwh-IYmqgEYQKnzIoEncbNHISN2m2dAgP3JyMq_J8="
    
  return (
    <Box height="90vh"   backgroundImage={image} backgroundPosition="center" backgroundSize="cover" >

 {/* contact -----input for forms --------- */}
      <Box  shadow="2xl" background="#27272a" borderRadius="8px"  border="2px  #ffffff" height="auto" width={{base:"90%", sm: "60%", md: "45%", lg: "35%",xl: "30%",'2xl': "30%"}} p="20px" position="relative" left="5%"  top="20%">
  
  <FormControl isRequired={true}>
  <Input placeholder='Type Receiver Email' width="100%"  focusBorderColor="white"  m="20px 0px" color="white" name="to"  value={state.to} onChange={handleChange} />
</FormControl>

  <Input placeholder='devisingh9871686098@gmail.com' isReadOnly={true}  width="100%"  focusBorderColor="white" m="20px 0px" color="white"    />

  <FormControl isRequired>
  <Textarea placeholder='Type your message...' width="100%" focusBorderColor="white" m="30px 0px" color="white" name="text" value={state.text} onChange={handleChange} />
   </FormControl>

   <Button colorScheme='facebook' isDisabled={state.to == "" || state.text == ""}  m="30px 0px" width="100%" onClick={handleForm}>Send </Button>
    {/* <input type="submit" /> */}
      </Box>
    </Box>
  )
}

export  {ContactPage}
