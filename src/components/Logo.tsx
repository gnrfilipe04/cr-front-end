import { HStack, Text, useColorModeValue } from "@chakra-ui/react";

export function Logo(){
    const contatcs = useColorModeValue('cyan.500', 'gray.200')
    const ui = useColorModeValue('gray.700', 'cyan.500')
    
    return (
        <HStack>
            <Text fontSize={'5xl'} color={contatcs} fontWeight={'bold'}>Contacts</Text>
            <Text fontSize={'5xl'} color={ui} fontWeight={'bold'}>UI</Text>
        </HStack>
    );
}