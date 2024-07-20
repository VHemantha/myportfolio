import { Container, Typography, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
const Root = styled('div')({
  position: 'relative',
  minHeight: '100vh',
  overflow: 'hidden', // Ensure no overflow issues
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
}));

const CustomAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  marginBottom: theme.spacing(2),
  borderRadius: '50%',
}));

const Home = () => {
  

  return (
    <Root>
      <ContentWrapper>
        <CustomContainer maxWidth="md">
          <CustomAvatar
            alt="Profile Picture"
            src="path/to/your/profile-picture.jpg"
          />
          <div id="os-phrases">
            <Typography className="name" variant="h4" sx={{ marginBottom: 1 }}>
              W K A V Hemantha
            </Typography>
          </div>
          <Typography variant="h6" sx={{ marginBottom: 4 }}>
            RPA & AI Engineer
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            Something about me
          </Typography>
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
  );
};

export default Home;
