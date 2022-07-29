import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

const NotificationsNav = () => (
  <HStack
    spacing="8"
    mx="8"
    pr="8"
    py="1"
    color="gray.800"
    borderRightWidth={1}
    borderColor="gray.700"
  >
    <Icon as={RiNotificationLine} fontSize="20" />
    <Icon as={RiUserAddLine} fontSize="20" />
  </HStack>
);

export default NotificationsNav;
