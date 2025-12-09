import React from 'react';

import "./Loading.css";

/**
 * Displays a loading message.
 * Used while data is being fetched.
 */
const Loading = () => {
  return (
      <div className='loading-container'>
      <h3>⏳ Töltés alatt...</h3>
    </div>
  );
};

export default Loading;