// import React, { useState } from 'react';
// import './chat.css';

// const ChatComponent = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isOpen, setIsOpen] = useState(false); // To control chat box visibility

//   // Function to handle sending messages
//   const sendMessage = async () => {
//     if (!input.trim()) return; // Prevent empty messages

//     // Simulating a fetch to an API for chat (replace this with your real API call)
//     const response = await fetch('https://api.geminiAI.com/chat', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer YOUR_GEMINI_API_KEY`
//       },
//       body: JSON.stringify({ message: input })
//     });

//     const data = await response.json();
//     setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: data.reply }]);
//     setInput(''); // Clear input after sending
//   };

//   return (
//     <>
//       {/* Start Live Chat Button (only visible when chat is closed) */}
//       {!isOpen && (
//         <button className="chat-toggle-button" onClick={() => setIsOpen(true)}>
//           Start Live Chat
//         </button>
//       )}

//       {/* Chat box (visible when chat is open) */}
//       {isOpen && (
//         <div className="chat-box">
//           {/* Chat Header with close chat functionality */}
//           <div className="chat-header">
//             Live Chat
//             <button className="close-chat-button" onClick={() => setIsOpen(false)}>
//               Close Chat
//             </button>
//           </div>

//           {/* Chat content area displaying messages */}
//           <div className="chat-content">
//             {messages.map((msg, index) => (
//               <div key={index} className={msg.sender === 'user' ? 'user-message' : 'bot-message'}>
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           {/* Input section for user to type and send messages */}
//           <div className="chat-input-section">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type your message..."
//               className="chat-input"
//             />
//             <button onClick={sendMessage} className="chat-send-button">
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ChatComponent;



// import React, { useState } from 'react';
// import './chat.css';

// const ChatComponent = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   // Function to handle sending messages
//   const sendMessage = async () => {
//     if (!input.trim()) return;  // Prevent sending empty messages

//     // Simulate an API call (replace this with your actual API call)
//     const response = await fetch('https://api.geminiAI.com/chat', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer YOUR_GEMINI_API_KEY`
//       },
//       body: JSON.stringify({ message: input })
//     });

//     const data = await response.json();
//     setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: data.reply }]);
//     setInput('');  // Clear the input after sending
//   };

//   return (
//     <div className="chat-box">
//       {/* Chat Header with close chat functionality */}
//       <div className="chat-header">
//         Live Chat
//         {/* You can optionally add a close button here if needed */}
//       </div>

//       {/* Chat content area displaying messages */}
//       <div className="chat-content">
//         {messages.map((msg, index) => (
//           <div key={index} className={msg.sender === 'user' ? 'user-message' : 'bot-message'}>
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       {/* Input section for typing messages */}
//       <div className="chat-input-section">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message..."
//           className="chat-input"
//         />
//         <button onClick={sendMessage} className="chat-send-button">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;


import React, { useState } from 'react';
import './chat.css';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(true); // State to toggle chat visibility

  // Function to handle sending messages
  const sendMessage = async () => {
    if (!input.trim()) return;  // Prevent sending empty messages

    // Simulate an API call (replace this with your actual API call)
    const response = await fetch('https://api.geminiAI.com/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_GEMINI_API_KEY`
      },
      body: JSON.stringify({ message: input })
    });

    const data = await response.json();
    setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: data.reply }]);
    setInput('');  // Clear the input after sending
  };

  // Function to handle closing the chat
  const closeChat = () => {
    setIsChatOpen(false);
  };

  if (!isChatOpen) return null; // Hide the chat box if closed

  return (
    <div className="chat-box">
      {/* Chat Header with close chat button */}
      <div className="chat-header">
        Live Chat
        <button className="close-chat-button" onClick={closeChat}>Close Chat</button> {/* Close chat button */}
      </div>

      {/* Chat content area displaying messages */}
      <div className="chat-content">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'user-message' : 'bot-message'}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input section for typing messages */}
      <div className="chat-input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button onClick={sendMessage} className="chat-send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
