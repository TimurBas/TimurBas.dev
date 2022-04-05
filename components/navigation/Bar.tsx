import { Flex } from "@chakra-ui/react";
import Search from "./Search";
import ColorSwitch from "./ColorSwitch";
import Home from "./Home";
import Blog from "./Blog";
import Work from "./Work";

const Bar = () => {
    return (
        <Flex>
            <Flex w="100%" alignItems="center" justify="space-around">
                <Home />
                <Work />
                <Blog />
                <Search />
            </Flex>
            <Flex p={3} align="center">
                <ColorSwitch />
            </Flex>
        </Flex >

    )
}

export default Bar