import { Box } from "@chakra-ui/react";
import Avatar from "./Avatar";
import SearchButton from "./SearchButton";
import ThemeButton from "./ThemeButton";

const NavigationBar = () => {
    return (
        <Box w="100%">
            <Avatar />
            <SearchButton />
            <ThemeButton />
        </Box>
    )
}

export default NavigationBar