// // App.js
// import React from 'react';
// import './App.css';
// import ContactSupport from './ContactSupport';  // Import your ContactSupport component
// import ChatComponent from './chat';  // Import your ChatComponent from chat.js
// import './chat.css';  // Import the CSS file for styling the chat

// function App() {
//   return (
//     <div className="App">
//       <ContactSupport />  {/* Render the ContactSupport component */}

//       {/* Render the ChatComponent just below your ContactSupport component */}
//       <div className="chat-container">
//         <ChatComponent />
//       </div>
//     </div>
//   );
// }

// export default App;

//




// import React, { useState } from 'react';
// import './App.css';
// import ContactSupport from './ContactSupport';  // Import your ContactSupport component
// import ChatComponent from './chat';  // Import your ChatComponent from chat.js
// import './chat.css';  // Import the CSS file for styling the chat

// function App() {
//   // State to control whether the chat box is visible or not
//   const [isChatVisible, setIsChatVisible] = useState(false);

//   // Function to toggle the chat box visibility
//   const handleChatToggle = () => {
//     setIsChatVisible(!isChatVisible);
//   };

//   return (
//     <div className="App">
//       <ContactSupport />  {/* Render the ContactSupport component */}
      
//       {/* Add a link to toggle the chat box */}
//       <div className="contact-methods">
//         <a href="#email-support">Email Support</a>
//         {' | '}
//         <a href="#live-chat" onClick={handleChatToggle}>Start a Live Chat</a>
//       </div>

//       {/* Conditionally render the chat box based on isChatVisible */}
//       {isChatVisible && (
//         <div className="chat-box">
//           <ChatComponent />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react';
import './App.css';
import ContactSupport from './ContactSupport';  // Import ContactSupport component
import ChatComponent from './chat';  // Import ChatComponent
import './chat.css';  // Import the CSS file for chat styling


function App() {
  const [isChatVisible, setIsChatVisible] = useState(false);  // State to control chat visibility

  // Function to handle chat box toggle
  const handleChatToggle = () => {
    setIsChatVisible(!isChatVisible);  // Toggle the chat box visibility
  };

  return (
    <div className="App">
      {/* Pass handleChatToggle to ContactSupport so that the "Start a Live Chat" link can open the chat */}
      <ContactSupport onChatClick={handleChatToggle} />  

      {/* Conditionally render the chat box based on isChatVisible */}
      {isChatVisible && (
        <div className="chat-box">
          <ChatComponent />  {/* Render the ChatComponent */}
        </div>
      )}
    </div>
  );
}

export default App;
