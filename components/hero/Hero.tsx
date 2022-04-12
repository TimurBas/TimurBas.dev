import { Flex, Text } from "@chakra-ui/react"
import Biography from "./presentation/Biography"
import Avatar from "./presentation/Avatar"
import GitHubLink from "./information/GithubLink"

const Hero = () => {
    return (
        <Flex>
            <Flex w="30%" wrap="wrap">
                <Avatar />
                <Biography />
            </Flex >
            <Flex w="70%" p={3}>
                <GitHubLink />
            </Flex>
        </Flex >
    )
}

export default Hero