//  
// import React, { useState } from 'react';
// import './ContactSupport.css'; // CSS file for custom styling

// const ContactSupport = () => {
//   const [faqOpen, setFaqOpen] = useState([false, false, false]); // To handle FAQ toggle state

//   const toggleFaq = (index) => {
//     const newFaqOpen = [...faqOpen];
//     newFaqOpen[index] = !newFaqOpen[index];
//     setFaqOpen(newFaqOpen);
//   };

//   return (
//     <div className="support-container">
//       {/* Header Section */}
//       <header className="support-header">
//         <h1>Contact Us</h1>
//         <p>We're here to help. Choose a way to get in touch below.</p>
//       </header>

//       {/* Support Sign-In Section */}
//       <section className="signin-section">
//         <h2>Sign In for Personalized Support</h2>
//         <button className="signin-button">Sign In</button>
//       </section>

//       {/* Product Options Section */}
//       <section className="product-options">
//         <h2>Select a Product</h2>
//         <div className="product-grid">
//           <div className="product-item">Fake News Analysis</div>
//           <div className="product-item">Blockchain Verification</div>
//           <div className="product-item">Video Authentication</div>
//           <div className="product-item">Support for Developers</div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="faq-section">
//         <h2>Frequently Asked Questions</h2>
//         <div className="faq-item" onClick={() => toggleFaq(0)}>
//           <button className="faq-question">
//             How does blockchain verify videos?
//           </button>
//           {faqOpen[0] && <div className="faq-answer">Blockchain verifies...</div>}
//         </div>

//         <div className="faq-item" onClick={() => toggleFaq(1)}>
//           <button className="faq-question">How do I contact support?</button>
//           {faqOpen[1] && <div className="faq-answer">You can contact...</div>}
//         </div>

//         <div className="faq-item" onClick={() => toggleFaq(2)}>
//           <button className="faq-question">
//             What are the supported video formats?
//           </button>
//           {faqOpen[2] && <div className="faq-answer">We support...</div>}
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="support-form">
//         <h2>Submit a Support Request</h2>
//         <form>
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Email" required />
//           <textarea placeholder="Describe your issue" required></textarea>
//           <button type="submit" className="submit-button">Submit</button>
//         </form>
//       </section>

//       {/* Footer Contact Links */}
//       <footer className="contact-links">
//         <h2>Other Contact Methods</h2>
//         <a href="mailto:support@fakenewanalysis.com" className="contact-link">Email Support</a>
//         <a href="/live-chat" className="contact-link">Start a Live Chat</a>
//       </footer>
//     </div>
//   );
// };

// export default ContactSupport;


// 

// import React, { useState } from 'react';
// import './ContactSupport.css'; // CSS file for custom styling

// const ContactSupport = ({ onChatClick }) => {  // Accept the onChatClick prop
//   const [faqOpen, setFaqOpen] = useState([false, false, false]); // To handle FAQ toggle state

//   const toggleFaq = (index) => {
//     const newFaqOpen = [...faqOpen];
//     newFaqOpen[index] = !newFaqOpen[index];
//     setFaqOpen(newFaqOpen);
//   };

//   const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// toggleSwitch.addEventListener('change', function(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }
// });


//   return (
//     <div className="support-container">
//       {/* Header Section */}
//       <header className="support-header">
//         <h1>Contact Us</h1>
//         <p>We're here to help. Choose a way to get in touch below.</p>
//       </header>

//       {/* Support Sign-In Section */}
//       <section className="signin-section">
//         <h2>Sign In for Personalized Support</h2>
//         <button className="signin-button">Sign In</button>
//       </section>

//       {/* Product Options Section */}
//       <section className="product-options">
//         <h2>Select a Product</h2>
//         <div className="product-grid">
//           <div className="product-item">Fake News Analysis</div>
//           <div className="product-item">Blockchain Verification</div>
//           <div className="product-item">Video Authentication</div>
//           <div className="product-item">Support for Developers</div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="faq-section">
//         <h2>Frequently Asked Questions</h2>
//         <div className="faq-item" onClick={() => toggleFaq(0)}>
//           <button className="faq-question">
//             How does blockchain verify videos?
//           </button>
//           {faqOpen[0] && <div className="faq-answer">Blockchain verifies...</div>}
//         </div>

//         <div className="faq-item" onClick={() => toggleFaq(1)}>
//           <button className="faq-question">How do I contact support?</button>
//           {faqOpen[1] && <div className="faq-answer">You can contact...</div>}
//         </div>

//         <div className="faq-item" onClick={() => toggleFaq(2)}>
//           <button className="faq-question">
//             What are the supported video formats?
//           </button>
//           {faqOpen[2] && <div className="faq-answer">We support...</div>}
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="support-form">
//         <h2>Submit a Support Request</h2>
//         <form action='https://formspree.io/f/myzgrjgw' method="POST">
//           <input type="text" name="username" placeholder="Your Name" autoComplete="off" required />
//           <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
//           <textarea placeholder="Describe your issue" name="message" required></textarea>
//           <button type="submit" className="submit-button">Submit</button>
//         </form>
//       </section>

//       {/* Footer Contact Links */}
//       <footer className="contact-links">
//         <h2>Other Contact Methods</h2>
//         <a href="mailto:support@fakenewanalysis.com" className="contact-link">Email Support</a>
//         {/* Clicking this link will trigger the chat opening */}
//         <a href="#live-chat" className="contact-link" onClick={onChatClick}>Start a Live Chat</a>
//       </footer>
//     </div>
//   );
// };

// export default ContactSupport;

import React, { useState, useEffect } from 'react';
import './ContactSupport.css'; // CSS file for custom styling
import { useAuth0 } from "@auth0/auth0-react";
import Footer from './Footer'; 

const ContactSupport = ({ onChatClick }) => {
  const [faqOpen, setFaqOpen] = useState([false, false, false]); // To handle FAQ toggle state
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle submit spinner
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { logout } = useAuth0();

  const toggleFaq = (index) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
  };

  useEffect(() => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (toggleSwitch) {
      const handleThemeChange = (e) => {
        document.documentElement.setAttribute('data-theme', e.target.checked ? 'dark' : 'light');
      };
      toggleSwitch.addEventListener('change', handleThemeChange);

      // Cleanup the event listener on component unmount
      return () => toggleSwitch.removeEventListener('change', handleThemeChange);
    }
  }, []);

  // Handle form submission and trigger spinner
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true); // Show the spinner

    // Simulate form submission delay (replace this with actual form submission logic)
    setTimeout(() => {
      e.target.submit(); // Submit the form after the simulated delay
    }, 3000);
  };

  return (
    <div className="support-container">
      {/* Header Section */}
      <header className="support-header">
        <h1>Contact Us</h1>
        <p>We're here to help. Choose a way to get in touch below.</p>
      </header>

      {/* Support Sign-In Section */}
      <section className="signin-section">
        <h2>Sign In for Personalized Support</h2>

        {isAuthenticated && <p>Welcome {user.name} !! </p>}
        {
          isAuthenticated ? (
            <li>
              <button className="signout-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sign Out</button>
            </li>
          ) : (
            <button onClick={() => loginWithRedirect()} className="signin-button">Sign In</button>
          )
        }
      </section>

      {/* Product Options Section */}
      <section className="product-options">
        <h2>Select a Product</h2>
        <div className="product-grid">
          <div className="product-item">
            <i className="fas fa-check-circle product-icon"></i>
            Blockchain Verification
          </div>
          <div className="product-item">
            <i className="fas fa-video product-icon"></i>
            Video Authentication
          </div>
          <div className="product-item">
            <i className="fas fa-code product-icon"></i>
            Support for Developers
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      
      {/* First Question */}
      <div className={`faq-item ${faqOpen[0] ? 'faq-opened' : ''}`} onClick={() => toggleFaq(0)}>
        <button className="faq-question">How does blockchain verify videos?</button>
        <div className="faq-answer">
          Blockchain verifies videos by creating an immutable record of the video’s metadata and hashing it into a blockchain transaction...
        </div>
      </div>

      {/* Second Question */}
      <div className={`faq-item ${faqOpen[1] ? 'faq-opened' : ''}`} onClick={() => toggleFaq(1)}>
        <button className="faq-question">How do I contact support?</button>
        <div className="faq-answer">
          You can contact support via email at "fna.ai2024@gmail.com".
        </div>
      </div>

      {/* Third Question */}
      <div className={`faq-item ${faqOpen[2] ? 'faq-opened' : ''}`} onClick={() => toggleFaq(2)}>
        <button className="faq-question">What are the supported video formats?</button>
        <div className="faq-answer">
          We support MP4, AVI, MOV, and WMV video formats. Make sure your video size does not exceed 2GB for faster processing.
        </div>
      </div>
    </section>

      {/* Contact Form */}
      <section className="support-form">
        <h2>Submit a Support Request</h2>
        <form onSubmit={handleSubmit} action='https://formspree.io/f/myzgrjgw' method="POST">
          <input type="text" name="username" placeholder="Your Name" autoComplete="off" required />
          <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
          <textarea placeholder="Describe your issue" name="message" required></textarea>
          <button type="submit" className={`submit-button ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </section>

      {/* {Footer Section} */}
      <Footer />
    </div>
  );
};

export default ContactSupport;
