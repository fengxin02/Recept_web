import React from 'react';
import "./Tag.css";


/**
 * Renders a small tag for categories or areas.
 * @param {string} label - The text inside the tag.
 */
const Tag = ({ label }) => {
  return (
    <span  className='tag-container'>
      {label}
    </span>
  );
};

export default Tag;