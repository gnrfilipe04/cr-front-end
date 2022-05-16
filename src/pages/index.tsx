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
import { useEffect, useState } from 'react'
import api from '../services/api'

const Login: NextPage = () => {
  const bgPage = useColorModeValue('gray.200', 'gray.800')
  const bgLogin = useColorModeValue('gray.100', 'gray.900')

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const toHome = () => router.push('/home')

  const accountInvalid = () => {
    alert('Usuário inválido')
  }

  const handleLogin = (user: string, password: string) => {
    api.post('accounts/authenticate', {
      email: user,
	    password: password
    })
    .then(response => {
      response.status === 202 ? toHome() : accountInvalid()
    })
    .catch(accountInvalid)
  }

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
                value={user}
                onChange={e => setUser(e.target.value)}
                />
              </Box>
              
              <Box>
                <FormLabel htmlFor='password' color={'secondary'}>Senha</FormLabel>
                <Input 
                id='password' 
                type='password'
                borderColor={'gray.200'}
                _hover={{ borderColor: 'cyan.300' }}
                focusBorderColor={'cyan.500'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
              </Box>

              <Box>
                <Button
                mt='5'
                type='submit'
                color={'gray.200'}
                bgColor={'cyan.500'}
                _hover={{bg: 'cyan.700'}}
                onClick={() => handleLogin(user, password)}
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
