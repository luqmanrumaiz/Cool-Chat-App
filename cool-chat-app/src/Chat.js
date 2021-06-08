import React from "react";
import "./Chat.css";
import { Center, Flex, HStack, Spacer, Text } from "@chakra-ui/layout";
import { Avatar, Box, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";

function Chat(props) {
  return (
    <div className="chat">
      <div className="chat__header">
        <Flex>
          <Avatar className="avatar" src={props.pfp_url} />
          <Box ml="3">
            <Text color="lightgrey" fontWeight="bold">
              {props.name}
            </Text>
            <Text color="lightgrey" fontSize="sm">
              {props.last_time_seen}
            </Text>
          </Box>
          <Spacer />
          <Center>
            <HStack>
              <IconButton>
                <AttachFileIcon style={{ color: "lightgrey" }} />
              </IconButton>
              <IconButton>
                <MoreVertIcon style={{ color: "lightgrey" }} />
              </IconButton>
            </HStack>
          </Center>
        </Flex>
      </div>
    </div>
  );
}

export default Chat;
