import { useEffect, useState } from "react";
import {
  ModalContent,
  ModalOverlay,
  Box,
  Heading,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  InputRightElement,
  InputGroup,
  Center,
  useToast,
} from "@chakra-ui/react";
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { Link as RouteLink } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import FgLogo from '../img/fg-logo.png';
import {useDispatch , useSelector} from "react-redux"
import {getUserData} from "../../Redux/Authentication/action"

const Login = ({ setPage, onClose }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");


  const {loading , userData , isError} = useSelector((state)=>{
    return {
        loading:state.ReducerAuth.loading ,
        userData:state.ReducerAuth.userData ,
        isError:state.ReducerAuth.isError
    }
})
// console.log(userData ,"user")
  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(getUserData)
  },[])

  const handleSubmit = ()=>{

  }
 

  return  (
    <>
      <ModalOverlay />
      <ModalContent>
        <Box className="container" >
          <Box className="left_col">
            <Box display={"flex"} flexDirection="column" gap={"10px"}>
              <Heading>Login</Heading>
              <Text color={"black"} fontWeight="500">
               Buy Real State Property
              </Text>
            </Box>
            <Box display="grid" alignItems={"end"}>
              <Image src={FgLogo}></Image>
            </Box>
          </Box>

          {/* right side */}
          <Box className="right_col">
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent="space-between"
              gap="20px"
              p={"20px 40px"}
            >
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="Enter your password"
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
      
              </FormControl>
              <Stack spacing={6}>
                <Box>
                  <Button
                    w={"100%"}
                    loadingText="Logging in..."
                    colorScheme={"blue"}
                    variant={"solid"}
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Box>
              </Stack>
              <Center>or</Center>
              <Center>
                <Button
                  w={"full"}
                  maxW={"md"}
                
                  variant={"outline"}
                  leftIcon={<FcGoogle />}
                >
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>
              </Center>
              <Box
                mt={"60px"}
                color={"blue.500"}
                display={["grid","grid",'flex']}
                gap={1}
                justifyContent="center"
              >
                <Text color={'black'}>New to GenioBits?</Text>
                <RouteLink to={"#"}>
                  <Text onClick={() => setPage(true)} _hover={{textDecoration:"underline"}}>Create an account</Text>
                </RouteLink>
              </Box>
            </Box>
          </Box>
        </Box>
      </ModalContent>
    </>
  );
};

export default Login;
