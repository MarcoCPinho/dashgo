import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

const NotificationsNav = () => (
  <HStack
    spacing={["6", "8"]}
    mx={["6", "8"]}
    pr={["6", "8"]}
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
