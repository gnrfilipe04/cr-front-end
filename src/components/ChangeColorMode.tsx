import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export function ChangeColorMode(){

    const { toggleColorMode, colorMode } = useColorMode()

    const getColorIcon = (icon: 'moon'|'sun') => {
        if(icon === 'moon'){
            return colorMode === 'light' ? 'gray.500' : 'yellow.400'
        }

        if(icon === 'sun'){
            return colorMode === 'dark' ? 'gray.500' : 'yellow.400'
        }
    }

    return (
        <HStack>
            <SunIcon boxSize={7} color={getColorIcon('sun')}/>
            <Switch onChange={toggleColorMode} colorScheme={'cyan'}/>
            <MoonIcon boxSize={5} color={getColorIcon('moon')}/>
        </HStack>
    )
}