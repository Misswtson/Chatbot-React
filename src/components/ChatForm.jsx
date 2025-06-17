import React, { useRef } from 'react';

 {/* Chat From Component */ }
const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {

    const inputRef = useRef();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage)   return;
        inputRef.current.value="";
        // Update the chat history
        setChatHistory((history) => [...history, { role: "user", text: userMessage }]);
       // Add a "Typing..." placeholder for the bot's response
        setTimeout ( () => {
             // Add a "Typing..." placeholder for the bot's response
            setChatHistory((history) => [...history, { role: "model", text: "Typing..." }]);
        // Call function to generate the bot's response
        generateBotResponse([...chatHistory, { role: "user", text: userMessage }])
    },600);

}; 
return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
<input ref={inputRef}type="text" placeholder="Message..." 
className="message-input" required/>
<button className="material-symbols-rounded">arrow_upward</button>
</form>
);
};

export default ChatForm