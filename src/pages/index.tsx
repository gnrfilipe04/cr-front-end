import { 
  Button, 
  Center, 
  Box, 
  FormControl, 
  FormLabel,
  Input, 
  VStack, 
  Flex, 
  useColorModeValue 
} from '@chakra-ui/react'

import type { NextPage } from 'next'
import Head from 'next/head'
import { ChangeColorMode } from '../components/ChangeColorMode'
import { Logo } from '../components/Logo'
import router from "next/router";

const Login: NextPage = () => {
  const bgPage = useColorModeValue('gray.200', 'gray.800')
  const bgLogin = useColorModeValue('gray.100', 'gray.900')

  const toHome = () => router.push('/home')

  return (
    <>
      <Head>
          <title>Login</title>
      </Head>
      <Box
        bg={bgPage}
        h='100vh'
      >
        <Flex
        justifyContent={'right'} 
        py='10'
        px='200'
        >
          <ChangeColorMode />
        </Flex>

        <Center h={'80vh'}>
          <VStack
          p='20'
          borderRadius={4}
          shadow={'lg'}
          bg={bgLogin}
          >
            <Logo />
            <FormControl isRequired>

              <Box>
                <FormLabel htmlFor='email' color={'secondary'}>E-mail</FormLabel>
                <Input 
                id='email' 
                type='email' 
                borderColor={'gray.200'}
                _hover={{ borderColor: 'cyan.300' }}
                focusBorderColor={'cyan.500'}
                />
              </Box>
              
              <Box>
                <FormLabel htmlFor='email' color={'secondary'}>Senha</FormLabel>
                <Input 
                id='email' 
                type='email'
                borderColor={'gray.200'}
                _hover={{ borderColor: 'cyan.300' }}
                focusBorderColor={'cyan.500'}
                />
              </Box>

              <Box>
                <Button
                mt='5'
                type='submit'
                color={'gray.200'}
                bgColor={'cyan.500'}
                _hover={{bg: 'cyan.700'}}
                onClick={toHome}
                >Entrar</Button>
              </Box>

            </FormControl>
          </VStack>
        </Center>
      </Box>
    </>
  )
}

export default Login
