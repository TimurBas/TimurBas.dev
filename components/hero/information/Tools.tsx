import { Box, Flex, Heading, Image } from "@chakra-ui/react";

const Tools = () => {
  return (
    <Flex>
      <Heading>Tools</Heading>
      <Image src="/git.svg" boxSize="50px" />
      <Image src="/github.svg" boxSize="50px" />
    </Flex>
  );
};

export default Tools;
