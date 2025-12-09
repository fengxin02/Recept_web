import React from 'react';

/**
 * Renders the cooking instructions text.
 * @param {string} text - The full instruction text.
 */
const Instructions = ({ text }) => {
  return (
    <div className="instructions-container">
      <p className="instructions-text">{text}</p>
    </div>
  );
};

export default Instructions;