import React from 'react';


const MessageForm = (props) => {
    const [value, setValue] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
      };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        onSubmit={handleSubmit}
      />
      
      <button type="submit" className="send-button">
        Send
      </button>
    </form>
  )
}

export default MessageForm;