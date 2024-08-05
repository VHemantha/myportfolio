import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const TypewriterText = ({ text, variant, sx }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100); // Adjust this value to change typing speed

      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return (
    <Typography variant={variant} sx={{ ...sx, borderRight: '0.15em solid #666', whiteSpace: 'nowrap', overflow: 'hidden' }}>
      {displayText}
    </Typography>
  );
};

export default TypewriterText;