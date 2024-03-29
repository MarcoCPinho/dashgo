import { Text } from "@chakra-ui/react";

const Logo = () => (
  <Text
    fontSize={["2xl", "3xl"]}
    fontWeight="bold"
    letterSpacing="tight"
    w="64"
  >
    dashgo
    <Text as="span" marginLeft="1" color="pink.500">
      .
    </Text>
  </Text>
);

export default Logo;
