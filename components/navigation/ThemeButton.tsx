import { Box, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ThemeButton = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box p={2} as="button" pointerEvents="all" onClick={toggleColorMode}>
            {
                colorMode === "light" ? <MoonIcon w={8} h={8} /> : <SunIcon w={8} h={8} />
            }
        </Box>
    )
}

export default ThemeButton