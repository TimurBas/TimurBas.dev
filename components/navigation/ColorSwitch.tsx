import { IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ColorSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        colorMode === "light" ?
            <IconButton _hover={{ filter: "invert(20%)" }} transition="ease 0.4s" aria-label="switch" bg="rgb(32,32,35)" borderRadius={5} icon={<MoonIcon color="orange.300" w={6} h={6} />} onClick={toggleColorMode} _focus={{ boxShadow: "none", }} />
            :
            <IconButton _hover={{ filter: "invert(20%)" }} transition="ease 0.4s" aria-label="switch" bg="orange.300" borderRadius={5} icon={<SunIcon color="blackAlpha.700" w={6} h={6} />} onClick={toggleColorMode} _focus={{ boxShadow: "none", }} />
    )
}

export default ColorSwitch