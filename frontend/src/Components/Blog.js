import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBlogs } from '../services/api';
import { Container, Card, CardContent, Typography, Grid, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTransition, animated } from '@react-spring/web';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Root = styled('div')({
  position: 'relative',
  minHeight: '100vh',
  overflow: 'hidden',
  paddingTop: '100px',
});

const AnimatedCard = animated(Card);

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBlogs()
      .then(response => {
        console.log('blog data:', response.data);
        setBlogs(response.data);
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const transitions = useTransition(blogs, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
    keys: blogs => blogs.id,
  });

  const handleSeeMoreClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <Root>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          My Blogs
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <TransitionGroup component={null}>
            {transitions((style, blogs) => (
              <CSSTransition key={blogs.id} timeout={300} classNames="fade">
                <Grid item xs={12} sm={6} md={4}>
                  <AnimatedCard style={{ ...style, zIndex: 1 }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={blogs.image}
                      alt={blogs.title}
                      onError={(e) => console.error('Error loading image:', e)}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {blogs.title}
                      </Typography>
                      <Button onClick={() => handleSeeMoreClick(blogs.id)}>
                        See More
                      </Button>
                    </CardContent>
                  </AnimatedCard>
                </Grid>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Grid>
      </Container>
    </Root>
  );
};

export default Blogs;
