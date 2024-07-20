import React, { useState } from 'react';

const TruncatedText = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? text.slice(0, maxLength) : text}
      {text.length > maxLength && (
        <span onClick={toggleIsTruncated} style={{ color: 'blue', cursor: 'pointer' }}>
          {isTruncated ? '...See More' : ' See Less'}
        </span>
      )}
    </div>
  );
};

export default TruncatedText;

