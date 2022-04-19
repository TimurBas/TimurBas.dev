import { Box, Flex, Text, Icon, Heading, Image } from "@chakra-ui/react";

const Languages = () => {
  return (
    <Box>
      <Heading>Languages</Heading>
      <Flex>
        <Image src="/ocaml.svg" boxSize="50px" />
        <Image src="/python.svg" boxSize="50px" />
        <Image src="/java.svg" boxSize="50px" />
      </Flex>
    </Box>
  );
};

export default Languages;
