import React from "react";
import "./Chat.css";
import { Center, Flex, HStack, Spacer, Stack, Text } from "@chakra-ui/layout";
import { Avatar, Box, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Tag, TagLabel } from "@chakra-ui/tag";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import SendIcon from "@material-ui/icons/Send";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

function Chat(props) {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

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
        <Stack>
          <Tag
            padding="10px"
            size="md"
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
                {new Date().toUTCString()}
              </span>
            </TagLabel>
          </Tag>
          <Tag
            padding="10px"
            size="md"
            colorScheme="whatsapp"
            borderRadius="full"
          >
            <Avatar
              src="https://avatars.githubusercontent.com/u/61153637?s=400&u=6470fc8cfab0bddcd486a30beb4d4e5a67660c6a&v=4"
              size="xs"
              name="Segun Adebayo"
              ml={-1}
              mr={2}
            />
            <TagLabel className="chat__message">
              No I do not want to talk
              <span className="chat__timestamp">
                {new Date().toUTCString()}
              </span>
            </TagLabel>
          </Tag>
        </Stack>
      </div>
      <InputGroup className="chat__input">
        <InputLeftElement
          color="gray.300"
          fontSize="0.8em"
          children={
            <IconButton>
              <EmojiEmotionsIcon style={{ color: "lightgrey" }} />
            </IconButton>
          }
        />
        <Input
          variant="flushed"
          value={value}
          fontSize="0.8em"
          onChange={handleChange}
          placeholder="Enter Message"
        />
        <InputRightElement
          children={
            <IconButton>
              <SendIcon style={{ color: "lightgrey" }} />
            </IconButton>
          }
        />
      </InputGroup>
    </div>
  );
}

export default Chat;
