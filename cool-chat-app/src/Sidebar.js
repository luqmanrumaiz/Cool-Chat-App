import React from "react";
import "./Sidebar.css";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar, IconButton } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars.githubusercontent.com/u/61153637?s=400&u=6470fc8cfab0bddcd486a30beb4d4e5a67660c6a&v=4" />
        <IconButton id="settingsIconButton">
          <SettingsIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
