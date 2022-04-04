import { Box } from "@chakra-ui/react";
import SearchButton from "./SearchButton";
import ThemeButton from "./ThemeButton";

const NavigationBar = () => {
    return (
        <Box>
            <SearchButton />
            <ThemeButton />
        </Box>
    )
}

export default NavigationBar