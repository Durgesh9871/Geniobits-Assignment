import React from 'react'
import {
    Box,
    Heading,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
    Image,
  } from "@chakra-ui/react";


const dashData = JSON.parse(localStorage.getItem("messege"))

const Dashboard = () => {
    // console.log(dashData)
    const userImage = {
        male: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnyqrxK4zSTIzWLbCQSBMxYgT2B4U0jv6JMJ-Aezj-kkKqSl7GShdy8jPY0HowqY6KibmsWomG6k&usqp=CAU&ec=48600112",
      };

  return (
    <Box m="20px 0px">
      <TableContainer color="grey">
            <Table variant="simple">
              <TableCaption placement="top" fontSize="18px">Contact Details </TableCaption>
              <Thead>
                <Tr>
                  <Th>Photo</Th>
                  <Th>Email</Th>
                  <Th>Messege</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/*  Loop starts from here ------------------- */}

                {dashData.length > 0 && 
                  dashData?.map((item, i) => {
                    // console.log(item.signUpTime.slice(0,16));
                    return (
                      <Tr key={i}>
                        <Td>
                          <Image
                            src={
                                userImage.male
                            }
                            width="35px"
                            borderRadius="100%"
                            border="2px solid white"
                          />
                        </Td>
                        <Td >{item.to}</Td>
                        <Td >{item.text}</Td>
                       
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
    </Box>
  )
}

export  {Dashboard}
