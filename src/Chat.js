import "./Chat.css";

import React from "react";
import { Avatar,IconButton} from "@material-ui/core/";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
function Chat() {
  return <div className="chat">
    <div className="chat_header">
     <Avatar/>
     <div className="chat_headerInfo">
       <h3>Room Name</h3>
       <p>Last Seen At..</p>
     </div>
     <div className="chat_headerRight">
       <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
           <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
     </div>
    </div>
    <div className="chat_body">
      <p className="chat_message">
        <span className="chat_name">Isuru Udayanga</span>
        This is a Test Message
        <span className="chat_timestamp">{new Date().toUTCString()}</span>
      </p>
      <p className="chat_message chat_reciver">
        <span className="chat_name">Nippa Niga Niga</span>
        This is a Test Message
        <span className="chat_timestamp">{new Date().toUTCString()}</span>
      </p>
      <p className="chat_message">
        <span className="chat_name">Isuru Udayanga</span>
        This is a Test Message
        <span className="chat_timestamp">{new Date().toUTCString()}</span>
      </p>

    </div>
    <div className="chat_footer">
    <InsertEmoticonIcon/>
    <form>
      <input type="text" placeholder = "Type the message"></input>
      <button type="submit">Send a Message</button>
    </form>
    <MicIcon/>
    </div>
  </div>;
}

export default Chat;
