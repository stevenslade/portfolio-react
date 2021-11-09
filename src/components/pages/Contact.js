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
  imgStyle: {
    borderRadius: '10px',
  },
  colorGrey: {
    color: '#717E8E',
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
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p>
    </div>
  );
}
