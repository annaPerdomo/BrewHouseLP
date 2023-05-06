import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import AboutUs from '../src/components/AboutUs';
import Address from '../src/components/Address';
import Copyright from '../src/components/Copyright';
import FeaturedItems from '../src/components/FeaturedItems';
import Hours from '../src/components/Hours';
import Menu from '../src/components/Menu';
import useDeviceSize from '../src/hooks/useDeviceSize';

export default function Home(): React.ReactElement<any> {
  const { width } = useDeviceSize();
  const isMobile = width <= 500;

  return (
    <>
      <Box
        sx={{
          maxHeight: '600px',
          position: 'relative',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <img
          alt="coffee-shop-image"
          src="https://i.imgur.com/UuMTeR6.jpg"
          style={{ opacity: 0.5, maxHeight: '600px' }}
          width="100%"
        />

        <img
          alt="brew-house-logo"
          height={isMobile ? 150 : 300}
          src="https://i.imgur.com/9pJORYw.png"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          width={isMobile ? 300 : 1000}
        />
      </Box>

      <Box
        sx={{
          backgroundColor: 'secondary.main',
          paddingBottom: '3%',
        }}
      >
        <br />
        <Typography
          variant="h3"
          color="black"
          gutterBottom
          sx={{ textAlign: 'center', mb: '2%' }}
        >
          Featured Items
        </Typography>
        <FeaturedItems />
      </Box>

      <Container maxWidth="lg" sx={{ overflow: 'hidden' }}>
        <Box
          sx={{
            mb: '1%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: 'center', mb: '1%', mt: '3%' }}
          >
            Menu
          </Typography>

          <br />

          <Menu />

          <br />
          <br />
        </Box>
      </Container>

      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <br />
        <AboutUs />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          overflow: 'hidden',
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <br />
        <br />

        <Address />

        <br />
        <br />

        <Hours />

        <Copyright />
      </Container>
    </>
  );
}
