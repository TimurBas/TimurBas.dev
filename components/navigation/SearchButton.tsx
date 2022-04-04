import { Box } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchButton = () => {
    const searchLogic = () => ({})
    return (
        <Box p={2} as="button" pointerEvents="all" onClick={searchLogic}>
            <SearchIcon w={8} h={8} />
        </Box>
    )
}

export default SearchButton