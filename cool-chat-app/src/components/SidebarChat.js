import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { Avatar, Box } from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat(props) {
  return (
    <div className="sidebarChat">
      <Flex>
        <Avatar className="avatar" src={props.pfp_url} />
        <Box ml="3">
          <Text color="lightgrey" fontWeight="bold">
            {props.name}
          </Text>
          <Text color="lightgrey" fontSize="sm">
            {props.last_sent_message}
          </Text>
        </Box>
      </Flex>
    </div>
  );
}

export default SidebarChat;
