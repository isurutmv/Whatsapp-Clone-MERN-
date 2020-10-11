import "./Sidebar.css";

import { Avatar, IconButton } from "@material-ui/core/";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://avatars0.githubusercontent.com/u/24694293?s=400&u=e93fb75fdca820725c228008a88eb11e5c571749&v=4" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
         <SearchOutlinedIcon/>
         <input type="text" className="" placeholder="Start Searching"></input>
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat/>
         <SidebarChat/>
          <SidebarChat/>
      </div>
    </div>
  );
}

export default Sidebar;
