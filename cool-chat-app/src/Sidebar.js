import React from "react";
import "./Sidebar.css";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars.githubusercontent.com/u/61153637?s=400&u=6470fc8cfab0bddcd486a30beb4d4e5a67660c6a&v=4" />
        <IconButton id="settingsIconButton">
          <SettingsIcon style={{ color: "lightgrey" }} />
        </IconButton>
      </div>
      <div className="sidebar__search">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={<SearchOutlined />}
          />
          <Input placeholder="Search or Start a new Chat" />
        </InputGroup>
      </div>
    </div>
  );
}

export default Sidebar;
