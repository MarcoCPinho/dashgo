import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

const Profile = ({ showProfileData }: ProfileProps) => (
  <Flex align="center">
    {showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Marco Pinho</Text>
        <Text color="gray.300" fontSize="small">
          marcocpinho@hotmail.com
        </Text>
      </Box>
    )}

    <Avatar
      size="md"
      name="Marco Pinho"
      src="https://github.com/marcocpinho.png"
    />
  </Flex>
);

export default Profile;
