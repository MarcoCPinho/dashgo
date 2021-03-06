import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import NotificationsNav from "./Notificationsnav";
import Profile from "./Profile";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      marginX="auto"
      marginTop="4"
      paddingX="4"
      align="center"
    >
      <Logo />

      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
};

export default Header;
