import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {IconButton,Avatar} from '@material-ui/core/';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebar_header">
                      <Avatar src="https://avatars0.githubusercontent.com/u/24694293?s=400&u=e93fb75fdca820725c228008a88eb11e5c571749&v=4" />
                <div className="sidebar_headerRight">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon/>
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar