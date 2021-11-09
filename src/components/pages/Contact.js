import React, { useState } from 'react';

// Import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

const styles = {
  contactStyle: {
    color: '#717E8E',
    borderStyle: 'solid',
    borderColor: '#717E8E',
    borderRadius: '10px',
    marginTop: '10px',
    background: 'black',
  },
  cardStyle: {
    width: '20rem',
    fontColor: '#717E8E',
    borderStyle: 'solid',
    borderColor: '#717E8E',
    borderRadius: '10px',
    borderWidth: '3px',
    marginTop: '20px',
    marginLeft: '5px',
    marginRight: '5px',
    background: 'black',
  },
  imageContStyle: {
    minHeight: '200px',
    minWidth: '200px',
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
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
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
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    // if (!checkPassword(password)) {
    //   setErrorMessage(
    //     `Choose a more secure password for the account: ${userName}`
    //   );
    //   return;
    // }
    // alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setSenderName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div style={styles.contactStyle} className="container">
      <h1>Contact Page</h1>

      <div>
      <p>If you would to contact me please use the form below</p>
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
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
          size="50"
          maxLength="200"
          placeholder="message"
        />
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
