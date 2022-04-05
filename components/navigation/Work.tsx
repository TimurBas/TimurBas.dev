import NextLink from "next/link"
import { Link, Text } from "@chakra-ui/layout"

const Work = () => {
    return (
        <NextLink href='/work' passHref>
            <Link style={{ textDecoration: "none" }} _hover={{ filter: "invert(20%)" }} transition="ease 0.4s">
                <Text>
                    Works
                </Text>
            </Link>
        </NextLink>
    )
}

export default Work