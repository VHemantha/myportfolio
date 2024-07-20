import React from 'react';
import { Typography, Box } from '@mui/material';

const BlogContent = ({ content }) => {
  // Split the content into paragraphs
  const paragraphs = content.split('\n').filter(paragraph => paragraph.trim() !== '');

  return (
    <Box maxWidth="lg" mx="auto">
      {paragraphs.map((paragraph, index) => (
        <Typography 
          key={index}
          variant="body1" 
          paragraph 
          sx={{
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            hyphens: 'auto',
          }}
        >
          {paragraph}
        </Typography>
      ))}
    </Box>
  );
};

export default BlogContent;