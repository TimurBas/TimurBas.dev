import { Box } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Search = () => {
    const searchLogic = () => ({})
    return (
        <Box p={2} as="button" pointerEvents="all" onClick={searchLogic}>
            <SearchIcon w={6} h={6} _hover={{ filter: "invert(20%)" }} transition="ease 0.4s" />
        </Box>
    )
}

export default Search