import React  from "react";
// import {Button, TextField} from "@mui/core";
import Head from 'next/head'
import { Roboto } from "@next/font/google";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useChatGpt } from "@/hook/useChatGpt";

 
const promptId = "clgzb2ooc09agjiehwkv5teib";
const roboto = Roboto({weight:"400", subsets: ['latin'] });
export const  ChatContainer =()  => {

const [pendingMessage, setPendingMessage] = React.useState('');
const [message, setMessage] = React.useState("");
const  {data, isLoading} = useChatGpt(message, promptId);

    return  (
    <div  id ="chat-container"> 
          <h1>Chat Container   </h1>
        
           <TextField type="text"
            onChange={(e) => {
                setPendingMessage(e.target.value);
              }}
           />
          <Button 
           variant="outlined"
           onClick={ () => {            
           setMessage(pendingMessage);
          }}
          >
          Send
        </Button>

        <p> {message} </p>
      
        {isLoading ? <p> Loading... </p> : <p> {data} </p> }  

      </div>
        );   
    };
  
     
export default ChatContainer;
// Path: video\src\components\ChatInput.js