import { Heading, Flex, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link"

const Home = () => {
    return (
        <NextLink href="/" passHref>
            <Link style={{ textDecoration: "none", boxShadow: "none" }}>
                <Flex align="center" p={2} _hover={{ filter: "invert(20%)" }} transition="ease 0.4s">
                    <Image src="/favicon.ico" alt="logo" display="block" />
                    <Heading size="md" ml={-4}>Home</Heading>
                </Flex>
            </Link>
        </NextLink >
    )
}

export default Home