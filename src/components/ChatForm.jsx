import { useRef } from "react";

 {/* Chat From Component */ }

const ChatForm = () => {

    const inputRef = useRef();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage)   return;
        // Logic to send the message
        console.log(userMessage);
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