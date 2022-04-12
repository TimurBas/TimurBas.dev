import { Flex, Link, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import { FaGithub } from "react-icons/fa"


const GitHubLink = () => {
    return (
        <Flex alignItems="center">
            <NextLink href="https://github.com/TimurBas/TimurBas.dev" passHref>
                <Link style={{textDecoration: "none"}} _hover={{ filter: "invert(20%)" }} transition="ease 0.4s" mr={2} isExternal={true}>
                    <Text>
                        View the site's code
                    </Text>
                </Link>
            </NextLink>
            <FaGithub />
        </Flex>
    )
}

export default GitHubLink