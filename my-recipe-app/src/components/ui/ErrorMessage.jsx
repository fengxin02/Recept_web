import React from 'react';
import "./ErrorMessage.css";


/**
 * Displays an error message to the user.
 * @param {string} message - The error text to display.
 */
const ErrorMessage = ({ message }) => {
  return (
    <div >
      <h3>Error: {message}</h3>
    </div>
  );
};

export default ErrorMessage;