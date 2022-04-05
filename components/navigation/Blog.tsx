import NextLink from "next/link"
import { Link, Text } from "@chakra-ui/layout"

const Blog = () => {
    return (
        <NextLink href='/blog' passHref>
            <Link style={{ textDecoration: "none" }} _hover={{ filter: "invert(20%)" }} transition="ease 0.4s">
                <Text>
                    Blog
                </Text>
            </Link>
        </NextLink>
    )
}

export default Blog