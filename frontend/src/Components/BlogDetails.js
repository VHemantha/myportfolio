import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById, API_BASE_URL } from '../services/api';
import { Container, Typography, Box } from '@mui/material';
import BlogContent from './BlogContent';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getBlogById(id)
      .then(response => {
        setBlog(response.data);
      })
      .catch(error => console.error('Error fetching blog:', error));
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          {blog.title}
        </Typography>
      <Box my={4}> {/* Add some vertical margin */}
        <img
          src={`${API_BASE_URL}${blog.image}`}
          alt={blog.title}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '400px',
            objectFit: 'cover',
            marginBottom: '2rem'
          }}
        />
      
        <BlogContent content={blog.content} />
      </Box>
    </Container>
  );
};

export default BlogDetail;