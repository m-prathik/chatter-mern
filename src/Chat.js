import { Avatar,IconButton } from '@mui/material';
import React from 'react';
import "./Chat.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';   
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile' 
import MicIcon from '@mui/icons-material/Mic'
import {useState} from "react";
import axios from "./axios";

function Chat( {messages}) {

  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    axios.post('/messages/new', {
      "message" : input,
      "name" : " prathik ",
      "timestamp" : "12th may",
      "received" : false,
    });

    setInput("");

  }; 

  return (
    <div className='chat'>
       <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
            <h3>Room Name</h3>
            <p>Last Seen at ...</p>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
           <MoreVertIcon /> 
          </IconButton>
        </div>

       </div>
       <div className='chat__body'>
         {messages.map((message) => (
           <p className={`chat__message ${message.received && 'chat__receiver'}`}>
               
            <span className='chat__name'>{message.name}</span>   
               {message.message}
            <span className='chat__timestamp'>
              {message.timestamp}  
            </span>
 
            
            </p>


         ))}
          
       </div>
       <div className='chat__footer'>
       <IconButton><InsertEmoticonIcon /></IconButton> 
       <IconButton> <AttachFileIcon /></IconButton> 
            <form>
                <input 
                value={input} 
                onChange = {(e) => setInput(e.target.value)}   
                placeholder='Type your Message here'
                type='text' 
                 />
                <button onClick={sendMessage} type="submit"> 
                    Send a Message
                </button>
            </form>
            <IconButton> <MicIcon /></IconButton> 
       </div>
    </div>
  )
}

export default Chat