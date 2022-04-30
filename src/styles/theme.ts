import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    semanticTokens: {
        colors: {
          error: 'red.500',
          success: 'green.500',
          primary: {
            default: 'cyan.500',
            _dark: 'cyan.500',
          },
          secondary: {
            default: 'gray.700',
            _dark: 'gray.300',
          }
        },
      },    
    fonts: {
        heading: "Poppins",
        body: "Poppins"
    },
    styles: {
        global: {
            semanticTokens: {
                body: {
                    bg: {
                        default: 'gray.200',
                        _dark: 'gray.900'
                    },
                    color: {
                        default: 'gray.900',
                        _dark: 'gray.200'
                    },
                }
            }
        }
    }
})