import { ReactNode, useEffect } from 'react';

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'


interface TableCustomProps<T> {
    ths: string[];
    data: T[]
}



function TableCustom<T>({
    ths,
    data
}: TableCustomProps<T>){

    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Todos os usuários</TableCaption>
                <Thead>
                <Tr>
                    {ths.map((th, index) => <Th key={index}>{th}</Th>)}
                </Tr>
                </Thead>
                <Tbody>

                {data.map((item: T, index) => (
                    <Tr key={index}>
                        {Object.values(item).map((td, index) => (
                            <Td key={index}>{td?.toLocaleString()}</Td>
                        ))}
                    </Tr>
                ))}

                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default TableCustom