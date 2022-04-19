import { Flex, Heading } from "@chakra-ui/react"

const SubSectionContainer = () => {
    return (
        <Flex>
            <Flex w="50%" bg="red">
                <Heading>Hej</Heading>
            </Flex>
            <Flex w="50%" bg="blue">
                <Heading>Hej</Heading>
            </Flex>
        </Flex>
    )
}

export default SubSectionContainer