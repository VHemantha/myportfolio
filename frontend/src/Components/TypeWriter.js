import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const TypewriterText = ({ text, variant, sx }) => {
  const [displayText, setDisplayText] = useState(Array(text.length).fill(''));
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => {
          const newText = [...prev];
          newText[lineIndex] = text[lineIndex].substring(0, charIndex + 1);
          return newText;
        });

        if (charIndex < text[lineIndex].length - 1) {
          setCharIndex(charIndex + 1);
        } else {
          setLineIndex(lineIndex + 1);  
          setCharIndex(0);
        }
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [text, lineIndex, charIndex]);

  return (
    <div style={{ ...sx }}>
      {displayText.map((line, index) => (
        <Typography key={index} variant={variant} component="div">
          {line}
        </Typography>
      ))}
    </div>
  );
};

export default TypewriterText;