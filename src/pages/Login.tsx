import { Component } from 'react';
import login_image from '../ressource/login_image.jpg';
import logo from '../ressource/logo.png';
import { Box, Image, Flex, Text, Stack, Input, Button } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';

export default class Login extends Component {
  render() {
    return (
      <Flex direction="row" h="100vh">
        <Box w={['100%', '50%']} display="flex" flexDirection="column" alignItems="center" m={'50'}>
          <Image src={logo} alt="logo" w="18%" h="7%" />
          <Stack mt={'50'} >
            <Text textAlign="center" fontSize="6xl" fontWeight="bold">
              Welcome-back
            </Text>
            <Text textAlign="center" color="grey">
              Log in to manage your projects, they will grow up
            </Text>
            <Text mb='8px' mt="50px">Email:</Text>
            <Input variant='flushed' size="lg" placeholder='Enter your email...' />
            <Text mb='8px' mt="50px">Password:</Text>
            <Input variant='flushed' size="lg" placeholder='Enter your password...' />
            <Text fontSize='xs' color="grey">
              Forgot password
            </Text>
            <Button mt="50px" colorScheme="gray" size="lg">
              Sign in
            </Button>
            <Button
              w={'full'}
              maxW={'md'}
              variant={'outline'}
              leftIcon={<FcGoogle />}>
                <Text>Sign in with Google</Text>
            </Button>
          </Stack>
        </Box>
        <Box w={['100%', '50%']} h="100%" display="flex">
          <Image src={login_image} alt="login_image" w="100%" h="100%" />
        </Box>
      </Flex>
    );
  }
}
