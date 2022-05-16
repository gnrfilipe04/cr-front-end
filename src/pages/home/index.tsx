import { useState, useEffect } from "react"
import { IAccountDTO } from "../../dtos/IAccountDTO"
import { DeleteIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import type { NextPage } from 'next'
import { Logo } from '../../components/Logo'
import { ChangeColorMode } from "../../components/ChangeColorMode"
import api from "../../services/api"
import { AxiosResponse } from "axios"

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
  Checkbox,
  Box,
  Flex,
  useColorModeValue,
  Heading
} from '@chakra-ui/react'

const Home: NextPage = () => {

    const [users, setUsers] = useState<IAccountDTO[]>([])

    const [usersSelected, setUsersSelected] = useState<IAccountDTO[]>([])
    const [allUsers, setAllUsers] = useState(false)

    const bgPage = useColorModeValue('white', 'gray.800')

    const isUserSelected = (id: string) => {
        return usersSelected.some(user => user.id === id)
        
    }

    const handleAllSelectedUsers = (user: IAccountDTO) => {

        const usersWithoutUser = usersSelected.filter(item => item.id !== user.id)

        isUserSelected(user.id)
            ? setUsersSelected(usersWithoutUser)
            : setUsersSelected([...usersSelected, user])
        
    }

    const getUsers = async () => {
        const users: AxiosResponse<IAccountDTO[]> = await api.get('contacts')
        setUsers(users.data)
    }

    useEffect(() => {
        allUsers ? setUsersSelected(users) : setUsersSelected([])

    }, [allUsers])

    useEffect(() => {
        getUsers()
    }, [])

    return (
       <>
            <Head>
                <title>Home</title>
            </Head>
            <Box
                bg={bgPage}
                h='100vh'
            >
                <Flex
                justifyContent={'space-between'} 
                alignItems={'center'}
                py='10'
                px='200'
                >   
                    <Logo />
                    <ChangeColorMode />
                </Flex>

                <Heading
                    marginTop={10} 
                    textAlign={'center'}
                    size={'sm'}>Matenha seus usuários em um só lugar.
                </Heading>

                <Center h='60vh'>
                    <TableContainer>
                        <Table variant='simple'>
                            <TableCaption>Todos os usuários</TableCaption>
                            <Thead>
                            <Tr>
                                <Th>
                                    <Checkbox
                                        isChecked={allUsers} 
                                        onChange={() => setAllUsers(!allUsers)}
                                    />
                                </Th> 
                                <Th>Nome</Th>
                                <Th>E-mail</Th>
                                <Th>Nascimento</Th>
                                <Th />
                            </Tr>
                            </Thead>
                            <Tbody>
                            {users.map(user => (
                                <Tr key={user.id}>
                                    <Td>
                                        <Checkbox
                                            isChecked={isUserSelected(user.id)} 
                                            onChange={() => handleAllSelectedUsers(user)}
                                        />
                                    </Td>
                                    <Td>{user.fistName}</Td>
                                    <Td>{user.email}</Td>
                                    <Td>{String(user.birthDate)}</Td>
                                    <Td>
                                        <DeleteIcon color='error' cursor={'pointer'}/>
                                    </Td>
                                </Tr>
                            ))}
                            </Tbody>
                        </Table>
                    </TableContainer>

                </Center>

            </Box>
        </>                     
    )
}

export default Home