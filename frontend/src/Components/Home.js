import React, { useEffect, useRef } from 'react';
import { Container, Typography, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TypewriterText from './TypeWriter';
import MouseEffect from './MouseEffect';
import ProjectList from './ProjectList';
import Blogs from './Blog';
import Contact from './contactme';
import { GlobalStyles } from '@mui/material';

gsap.registerPlugin(ScrollTrigger);

const Root = styled('div')({
  position: 'relative',
  minHeight: '80vh',
  overflow: 'hidden',
});

const ContentWrapper = styled('div')({
  position: 'relative',
  zIndex: 2,
});

const CustomContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(8),
  padding: theme.spacing(2),
}));

const CustomAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  marginBottom: theme.spacing(2),
  borderRadius: '50%',
}));

const CustomSection = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const Home = () => {


  const typewriterLines = [
    "Viraj Hemantha is a skilled professional with 12 years of experience",
    "in robotic process automation, data engineering, and financial analysis.",
    "Proficient in RPA tools, Python, SQL, and data analysis, Viraj excels",
    "in optimizing workflows and driving efficiency in tech-driven environments."
  ];


  const projectListRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(projectListRef.current, {
      x: '-100%',
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: projectListRef.current,
        start: 'top 100%',
        end: 'bottom 80%',
        scrub: true,
      }
    });

    gsap.fromTo(blogsRef.current, {
      x: '100%',
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: blogsRef.current,
        start: 'top 100%',
        end: 'bottom 80%',
        scrub: true,
      }
    });

    gsap.fromTo(contactRef.current, {
      x: '-100%',
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top 100%',
        end: 'bottom 80%',
        scrub: true,
      }
    });
  }, []);

  return (
    <div>
      <Root>
      <GlobalStyles
  styles={{
    body: {
      margin: 0,
      padding: 0,
      overflowX: 'hidden', // Prevent horizontal scrolling
    },
  }}
/>
        <MouseEffect />
        <ContentWrapper>
          <CustomContainer maxWidth="md">
            <CustomAvatar
              alt="Profile Picture"
              src="/viraj.jfif"
            />
            <div id="os-phrases">
              <Typography className="name" variant="h4" sx={{ marginBottom: 1 }}>
                W K A V Hemantha
              </Typography>
            </div>
            <Typography variant="h6" sx={{ marginBottom: 4 }}>
              RPA & AI Engineer
            </Typography>
            <TypewriterText
              text={typewriterLines}
              variant="body1"
              sx={{
                marginBottom: 4,
                textAlign: 'center',
                width: '100%', // Use full width of the container
                maxWidth: '100%', // Ensure it doesn't exceed container width
                overflowWrap: 'break-word', // Allow long words to break and wrap
                wordBreak: 'break-word', // Break words if necessary
              }}
            />
            <Button
              variant="contained"
              href="/contactme"
              sx={{
                marginTop: 2,
                backgroundColor: 'black',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'darkgray',
                },
              }}
            >
              Contact Me
            </Button>
          </CustomContainer>
        </ContentWrapper>
      </Root>
      <CustomSection ref={projectListRef}>
        <ProjectList />
      </CustomSection>
      <CustomSection ref={blogsRef}>
        <Blogs />
      </CustomSection>
      <CustomSection ref={contactRef}>
        <Contact />
      </CustomSection>
    </div>
  );
};

export default Home;
