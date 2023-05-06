import { PromptableApi } from "promptable";
import { Configuration, OpenAIApi  }  from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const chatgpt = async (req, res) => {
    const { message, promptId } = req.body;
    console.log("API call chatgpt.js");
    
    // const PromptId = "Test promptId ";
    // Verify message is not empty
    if(!message) {
        res.status(400).json({error: "Message is required"});
        return;
    }
   // re-write promptId to use in openai api as arg been passed in
    if (!promptId) {
         res.status(400).json({error: "PromptId is required"});   
     }


   
    // call prompt ai  api and openai api to get response
    const reply = await getReply (message, promptId ) ;
    res.status(200).json({reply});
    return;
}

const getReply = async (message, promptId) => {
      //  GET PROMPT FROM prompt ai
  if(!promptId) {
    throw new Error("PromptId is required");
  }
      
    const promptDeployment = await PromptableApi.getActiveDeployment({
    promptId
});

    console.log("promptDeployment", promptDeployment);

    if (!promptDeployment) {
        throw new Error("prompt Deploymeent not found");
      }
      // replace prompt with message
   const revisedPrompt = {
     ...promptDeployment,
     text: promptDeployment.text.replace("{{input}}", message),
   } ;

   console.log("revisedPrompt", revisedPrompt);
   
   // call openai api to get response

const response = await openai.createCompletion ({
  model : revisedPrompt.config.model, 
  prompt:   revisedPrompt.text,
  temperature :revisedPrompt.config.temperature,
  max_tokens : revisedPrompt.config.max_tokens,
  top_p : 1.0,
  frequency_penalty: 0.0,
  presence_penalty:0.0,
  stop: revisedPrompt.config.stop,
});

// parse choices

console.log("Openai response", response);

// return "";
    
if (response.data.choices && response.data.choices.length > 0)  {
    return response.data.choices[0].text;
    // console.log("response.data.choices[0].text", response.data.choices[0].text);
   }else {
    return "I am sorry I don't understand"
 }


};

export default chatgpt;

  
// https://github.com/promptable/Promptable-web-sdk
// usage 

// import { PromptableApi, OpenAi } from "promptable";

// const promptDeployment = PromptableApi.getActiveDeployment({
//   promptId: "<your prompt id>",
// });

// // Inject any variables you're using
// const prompt = PromptableApi.injectVariables({
//   promptDeployment,
//   variables: {
//     greetings: "Hi! whats up?",
//   },
// });

// // completion support (streaming coming soon!)
// const completion = await OpenAi.runCompletion({
//   req,
//   apiKey,
// });

