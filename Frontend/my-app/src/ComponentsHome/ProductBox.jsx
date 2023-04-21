import { Box, Heading, Skeleton, SkeletonText, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Image } from '@chakra-ui/react'
import "./product.css"
import { Link } from 'react-router-dom'


const ProductBox = ({allData , loading}) => {
  const {type , price , adress , location , description , image , id} = allData
    const [effect , setEffect] = useState(false)


    const saveItem = ()=>{

    }

    // hover for saving items ------
  const handleProductHover = ()=>{
    setEffect(true)
  }

  const closeProductHover = ()=>{
    setEffect(false)
  }

  let style = {
    position:"relative" , 
}

// console.log(id)
  
  return (
    <Box border="2px  red" shadow="base" w={{base:"80vw", sm: "55vw", md: "32vw", lg: "23vw" ,xl: "23vw",'2xl': "23vw",}} h={{base:"375px", sm: "375px", md: "385px", lg: "385px" ,xl: "385px",'2xl': "385px",}} style={style}>

    {/* Image box -------------------- */}
    <Skeleton isLoaded={loading}>  <Box className="image">
   <Link to={`${id}`}> <Image className="img" src={image} alt={id} height="255px"  width="315px" margin="auto"  /> </Link>
    </Box>
    </Skeleton>


    {/* product details  */}
    <SkeletonText mt='4' noOfLines={3} spacing='5' skeletonHeight='4'  isLoaded={loading} animation="none">
    <Box id='productDataDesc' position="absolute" bottom="20px" onMouseOut={closeProductHover} onMouseOver={handleProductHover}  style={{border:"2px   #EBECEE" ,height:"auto" , padding:"10px 10px 10px 10px" ,cursor:'pointer'  }}w={{base:"79vw", sm: "54vw", md: "31vw", lg: "22vw" ,xl: "22vw",'2xl': "22vw",}}>
    
    {/* on hover  */}
    { effect && (<Box  width={{base:"60%", sm: "60%", md: "60%", lg: "85%" ,xl: "60%",'2xl': "60%",}}   onClick={() => saveItem()}  style={{border:"2px solid #EBECEE" , margin:"auto" , display:"flex" ,justifyContent:"center" , alignItems:"center" ,padding:"2px" , color:"#f75045"  }}> <Text ml={2} fontWeight="500" > Save Property</Text> </Box> )}
    
    {effect && <Box style={{display:"flex" ,justifyContent:"space-between" }}>
     <Box>

     <Heading fontSize="15.5px" fontWeight="600" color="#303030" textAlign="left">{location}</Heading>
     </Box>

     </Box> }

     {/*  Ends here hover ------------------------------------ */}

    
     {!effect &&   <Heading fontSize="15.5px" fontWeight="600" color="#303030" textAlign="left">{type}</Heading> }
    {!effect && <Text fontSize='14px' className='control' fontWeight="500" color="#727272" textAlign="left"  >{description}</Text> }
     

      {/* price box --- */}
      <Box style={{display:'flex' , alignItems:"center"}}>
      <Heading fontSize='18px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">₹ {price}</Heading>
      </Box>
    </Box>
    </SkeletonText>
   
    {/* details end here ------------ */}
  </Box>
  )
}

export  {ProductBox}
