import { Flex, Icon, Text } from "@chakra-ui/react";
import Biography from "./presentation/Biography";
import Avatar from "./presentation/Avatar";
import GitHubLink from "./information/GitHubLink";
import Languages from "./information/Languages";
import Tools from "./information/Tools";
import Editors from "./information/Editors";
import IntroText from "./information/IntroText";
import Technologies from "./information/Technologies";

const Hero = () => {
  return (
    <Flex>
      <Flex w="30%" wrap="wrap" bg="orange">
        <Avatar />
        <Biography />
      </Flex>
      <Flex w="70%" p={3} bg="purple">
        <GitHubLink />
        <IntroText />
        <Languages />
        <Tools />
        <Editors />
        <Technologies />
      </Flex>
    </Flex>
  );
};

export default Hero;
