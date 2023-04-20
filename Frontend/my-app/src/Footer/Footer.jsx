import { Container, Heading, SimpleGrid, Stack  , Box , Text, Button} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <Box
    bg={'gray.50'}
    color={'gray.700'}>
    <Container as={Stack} maxW={'6xl'} py={10}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
        <Stack align={'flex-start'}>
          <Heading>Company</Heading>
          <Link href={'#'}>About Us</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Careers</Link>
          <Link href={'#'}>Contact Us</Link>
        </Stack>

        <Stack align={'flex-start'}>
          <Heading>Support</Heading>
          <Link href={'#'}>Help Center</Link>
          <Link href={'#'}>Safety Center</Link>
          <Link href={'#'}>Community Guidelines</Link>
        </Stack>

        <Stack align={'flex-start'}>
          <Heading>Legal</Heading>
          <Link href={'#'}>Cookies Policy</Link>
          <Link href={'#'}>Privacy Policy</Link>
          <Link href={'#'}>Terms of Service</Link>
          <Link href={'#'}>Law Enforcement</Link>
        </Stack>
      </SimpleGrid>
    </Container>

    <Box
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={('gray.200', 'gray.700')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ md: 'space-between' }}
        align={{ md: 'center' }}>
        <Text>© 2023 Real State Property. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <Button label={'Twitter'} href={'#'}>
            <FaTwitter />
          </Button>
          <Button label={'YouTube'} href={'#'}>
            <FaYoutube />
          </Button>
          <Button label={'Instagram'} href={'#'}>
            <FaInstagram />
          </Button>
        </Stack>
      </Container>
    </Box>
  </Box>
  )
}

export  {Footer}
