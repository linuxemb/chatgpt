import React  from "react";
// import {Button, TextField} from "@mui/core";
import Head from 'next/head'
import { Roboto } from "@next/font/google";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

 

    const roboto = Roboto({weight:"400", subsets: ['latin'] });
export const  ChatContainer =()  => {

const [pendingMessage, setPendingMessage] = React.useState('');
const [message, setMessage] = React.useState("");
 // const  {data, isLoading} = useChatGpt(message, promptId);

// function MyComponent() {
//         const handleClick = () => {
//           console.log('Button clicked');
//           setMessage(pendingMessage);
//           <p> {pendingMessage} </p>
//         };
    return  (
    <div  id ="chat-container"> 
          <h1>Chat Container   </h1>
           <TextField type="text"
            onChange={(e) => {
                setPendingMessage(e.target.value);
              }}
           />
        
            {/* <TextField label="Enter text" />           */}
          
          <Button 
           variant="outlined"
           onClick={ () => {            
           setMessage(pendingMessage);
          }}
          >
          Send
        </Button>

        <p> {message} </p>
      </div>
        );   
    }

   
    // return (
    //     <div>
    //         <MyComponent />
    //         </div>
    // );
// }        
export default ChatContainer;
// Path: video\src\components\ChatInput.js