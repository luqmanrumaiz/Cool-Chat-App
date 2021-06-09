import React from "react";
import "./Chat.css";
import { Center, Flex, HStack, Spacer, Text } from "@chakra-ui/layout";
import { Avatar, Box, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Tag, TagLabel } from "@chakra-ui/tag";

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

      <div className="chat__body">
        <Tag
          padding="10px"
          size="lg"
          colorScheme="telegram"
          borderRadius="full"
        >
          <Avatar
            src="https://bit.ly/sage-adebayo"
            size="xs"
            name="Segun Adebayo"
            ml={-1}
            mr={2}
          />
          <TagLabel className="chat__message">
            Hey..
            <span className="chat__timestamp">
              {" "}
              {new Date().toUTCString()}{" "}
            </span>{" "}
          </TagLabel>
        </Tag>
      </div>
    </div>
  );
}

export default Chat;
