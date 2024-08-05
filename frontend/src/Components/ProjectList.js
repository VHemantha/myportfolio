import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/api';
import { Container, Card, CardContent, Typography, Grid, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTransition, animated } from '@react-spring/web';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TruncatedText from './Truncated';

const Root = styled('div')({
  position: 'relative',
  minHeight: '80vh',
  overflow: 'hidden',
  paddingTop: '20px',
});

const AnimatedCard = animated(Card);

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then(response => {
        console.log('Projects data:', response.data);
        setProjects(response.data);
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const transitions = useTransition(projects, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
    keys: project => project.id,
  });

  const handleLinkClick = (url, event) => {
    event.preventDefault();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Root>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <TransitionGroup component={null}>
            {transitions((style, project) => (
              <CSSTransition key={project.id} timeout={300} classNames="fade">
                <Grid item xs={12} sm={6} md={4}>
                  <AnimatedCard style={{ ...style, zIndex: 1 }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={project.image}
                      alt={project.title}
                      onError={(e) => console.error('Error loading image:', e)}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {project.title}
                      </Typography>
                      <TruncatedText text={project.description} maxLength={100} />
                      <Button 
                        color="primary"
                        onClick={(e) => handleLinkClick(project.url, e)}
                        style={{ cursor: 'pointer' }}
                      >
                        Visit Website
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

export default ProjectList;
