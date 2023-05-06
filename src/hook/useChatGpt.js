import React, { useEffect } from "react";

export const useChatGpt = (message, promptId) => {
    // this is hook used to send message tgo cpt3-api

    const [data, setData] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [error , setError] = React.useState(false);

    const fetchData = async () => {
       console.log("Hook called in useChatgpt.js....");
       try {
        setIsLoading(true);
        setError(false);
        const response = await fetch("/api/chatgpt", {
            method: "POST",
            headers: {  "Content-Type": "application/json" },
            body: JSON.stringify({
                message,
                promptId
            })
        }).then(res => res.json()); 
       
        // print in web broswer hwat is returned from api call ===lots shows on web console 
       //========================important to make api resp reflect on web page========================================================================
        setData(response.reply);  // in hook set reply va to data  to make it show on brower
      
       console.log('In useChatGPT---Hook api call response:', response.reply);  //print out emoji

    } catch (error) {
        setIsError(true);

    }
     setIsLoading(false);
        
};
//         );
//         if(response.reply){
//             console.log('In useChatGPT---Hook api call response:', response.reply.choices[0].text);
//             setData(response.reply)
//         }
//     } catch (error) {
//        //===
//        const data = await response.json();
//        setData(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//         setIsLoading(false);       
//     }
// };       

      // update
      useEffect(() => {
        if(message) {
            fetchData();
        }
        }, [message,promptId]);



    return {
        data,
        isLoading,
        error,
    };

  };

export default useChatGpt;

// import { getSelectUtilityClasses, stepIconClasses } from '@mui/material';
// import {useEffect, useState} from 'react';

// const useChatGpt = (message, promptId) => {
//   const [data, setData] = useState('');
//   const [isLoading, setLoading] = useState(false);

//   const fetchData = async () => {
//     if(!message) {
//       setData('');
//       return;
//     }
//     console.log('fetching data....');
//     setLoading(true);
//     try{
//       const response = await fetch('/api/chatgpt', {
//         method: 'POST',
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           message,
//           promptId
//         })
//       }).then(res => {
        
//         if(res.status === 500){
//           return {reply: 'Oops... The 🤖️ is no power'}
//         }
//         // return res.json()
//         res.json()
//       });
//       if(response.reply){
//         console.log('In useChatGPT---Hook api call response:', response.reply.choices[0].text);
//         setData(response.reply)
//       }
//     }catch(error){
//       SetIsError(true);
//       console.error('call chatgpt api error: ', error);
//     }
//       setIsLoading(false);
//   };   
    
//     // finally{
//     //   setLoading(false);
//     // }
//   // }
//   // hook is used wen useEffect used 
//   useEffect(() => {
//      setIsError(false);  // reset
//      if(message){
//       fetchData();
//      }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [message]);

//   return {
//     data,
//     isLoadings
//   }
// };

//  export default useChatGpt;
