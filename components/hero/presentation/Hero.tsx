import { Flex, Text } from "@chakra-ui/react"
import Biography from "./Biography"
import Avatar from "./Avatar"

const Hero = () => {
    return (
        <Flex>
            <Flex w="30%" wrap="wrap">
                <Avatar />
                <Biography />
            </Flex >
            <Flex w="70%" p={3}>
                <Text>
                    Lorem Ipsum doler sit amet
                </Text>
            </Flex>
        </Flex >
    )
}

export default Hero