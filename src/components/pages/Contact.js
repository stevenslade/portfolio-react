import React, { useState } from 'react';

// Import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

const styles = {
  contactStyle: {
    color: '#717E8E',
    borderStyle: 'solid',
    borderColor: '#717E8E',
    borderRadius: '10px',
    marginTop: '40px',
    background: 'black',
    maxWidth: '600px',
  },
  inputStyle: {
    marginTop: '10px',
  },
  submitBtnStyle: {
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
  },
};

export default function Contact() {
 
  const [email, setEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'senderName') {
      setSenderName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

    const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the senderName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !senderName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setSenderName('');
    setMessage('');
    setEmail('');
    setErrorMessage('')
  };

  return (
    <div style={styles.contactStyle} className="container">
      <h1>Contact Page</h1>

      <div>
      <p>If you would to contact me, please use the form below.</p>
      <form className="form">
        <div style={styles.inputStyle}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        </div>
        <div style={styles.inputStyle}>
        <input
          value={senderName}
          name="senderName"
          onChange={handleInputChange}
          type="text"
          placeholder="yourname"
        />
        </div>

        <div style={styles.inputStyle}>
        <textarea id="message" name="message" rows="4" cols="50" placeholder="message" onChange={e=>setMessage(e.target.value)} value={message}></textarea>
        </div>

        <div>
        <button style={styles.submitBtnStyle} type="button" className="btn-primary" onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
     
    </div>
  );
}
