import { Flex, Icon, Text } from "@chakra-ui/react";
import Biography from "./presentation/Biography";
import Avatar from "./presentation/Avatar";
import GitHubLink from "./information/GithubLink";
import Languages from "./information/Languages";
import Tools from "./information/Tools";
import Editors from "./information/Editors";
import IntroText from "./information/IntroText";

const Hero = () => {
  return (
    <Flex>
      <Flex w="30%" wrap="wrap">
        <Avatar />
        <Biography />
      </Flex>
      <Flex w="70%" p={3}>
        <GitHubLink />
        <IntroText />
        <Languages />
        <Tools />
        <Editors />
      </Flex>
    </Flex>
  );
};

export default Hero;
