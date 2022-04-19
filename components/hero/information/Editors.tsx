import { Box, Flex, Heading, Image } from "@chakra-ui/react";

const Editors = () => {
  return (
    <Flex>
      <Heading>Editors</Heading>
      <Image src="/vsc.svg" boxSize="50px" />
      <Image src="/vs.svg" boxSize="50px" />
    </Flex>
  );
};

export default Editors;
