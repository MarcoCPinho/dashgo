import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const Profile = () => (
  <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Marco Pinho</Text>
      <Text color="gray.300" fontSize="small">
        marcocpinho@hotmail.com
      </Text>
    </Box>

    <Avatar
      size="md"
      name="Marco Pinho"
      src="https://github.com/marcocpinho.png"
    />
  </Flex>
);

export default Profile;
