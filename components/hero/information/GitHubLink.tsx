import { Flex, Link, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import { FaGithub } from "react-icons/fa"


const GitHubLink = () => {
    return (
        <Flex alignItems="center">
            <FaGithub />
            <NextLink href="https://github.com/TimurBas/TimurBas.dev" passHref>
                <Link style={{ textDecoration: "none" }} _hover={{ filter: "invert(20%)" }} transition="ease 0.4s" ml={1} isExternal={true}>
                    <Text>
                        Source
                    </Text>
                </Link>
            </NextLink>
        </Flex>
    )
}

export default GitHubLink