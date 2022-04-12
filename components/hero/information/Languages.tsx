import { Box, Text, Icon, Heading, Image } from "@chakra-ui/react";

const Languages = () => {
  return (
    <Box>
      <Heading>Languages</Heading>
      <Box>
        <Image src="/ocaml.svg" boxSize="100px" />
        <Image src="/python.svg" boxSize="100px" />
        <Image src="/java.svg" boxSize="100px" />
      </Box>
    </Box>
  );
};

export default Languages;
