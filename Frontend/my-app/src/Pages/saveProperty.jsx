import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { BoxSave } from '../ComponentsHome/Box'


const saveInfo = JSON.parse(localStorage.getItem("saveProperty")) || []

const SaveProperty = () => {
    // console.log(saveInfo)
  return (
    <Box mt="">
        <Heading  fontWeight="600" color="grey" textAlign="center" m='40px 0px'>Saved Properties</Heading>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4, '2xl': 4 }} spacingY={10} >
{saveInfo?.map((item)=>{

    return <BoxSave key={item.id} allData={item} loading="false" />
})}

    </SimpleGrid>
    </Box>
  )
}

export  {SaveProperty}
