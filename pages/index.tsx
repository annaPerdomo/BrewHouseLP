import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import Copyright from '../src/components/Copyright';
import useDeviceSize from '../src/hooks/useDeviceSize';

export default function Home(): React.ReactElement<any> {
  const { height, width } = useDeviceSize();

  const isMobile = width <= 500;
  return (
    <Container maxWidth="lg" sx={{ overflow: 'hidden' }}>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" component="h1">
            THE BREW HOUSE
          </Typography>
        </Box>

        <Typography variant="h5">111 S 1st St</Typography>
        <Typography variant="h5">La Puente, CA 91744</Typography>
        <br />
        <Typography variant="h3" gutterBottom>
          Menu
        </Typography>

        <ImageList
          cols={1}
          gap={16}
          sx={{
            width: isMobile ? '100%' : 500,
            height: isMobile ? '100%' : 800,
          }}
          rowHeight={300}
        >
          <ImageListItem>
            <img
              alt="brew-house-menu-1"
              loading="lazy"
              src="https://i.imgur.com/YwzdWaW.jpg"
            />
          </ImageListItem>

          <ImageListItem>
            <img
              alt="brew-house-menu-2"
              loading="lazy"
              src="https://i.imgur.com/omQe1U1.jpg"
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h5">Hours</Typography>

        <List dense sx={{ pb: 4 }}>
          <ListItem>
            <Grid alignItems="center" container justifyContent="space-between">
              <Grid item>
                <Typography
                  sx={{ textTransform: 'capitalize', width: '200px' }}
                >
                  Monday
                </Typography>
              </Grid>

              <Grid item>
                <Typography>Closed</Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <Grid alignItems="center" container justifyContent="space-between">
              <Grid item>
                <Typography
                  sx={{ textTransform: 'capitalize', width: '200px' }}
                >
                  Tuesday
                </Typography>
              </Grid>

              <Grid item>
                <Typography>Closed</Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <Grid alignItems="center" container justifyContent="space-between">
              <Grid item>
                <Typography
                  sx={{ textTransform: 'capitalize', width: '200px' }}
                >
                  Wednesday
                </Typography>
              </Grid>

              <Grid item>
                <Typography>Closed</Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <Grid alignItems="center" container justifyContent="space-between">
              <Grid item>
                <Typography
                  sx={{ textTransform: 'capitalize', width: '200px' }}
                >
                  Thursday
                </Typography>
              </Grid>

              <Grid item>
                <Typography>Closed</Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <Grid alignItems="center" container justifyContent="space-between">
              <Grid item>
                <Typography
                  sx={{ textTransform: 'capitalize', width: '200px' }}
                >
                  Friday
                </Typography>
              </Grid>

              <Grid item>
                <Typography>Closed</Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <Grid alignItems="center" container justifyContent="space-between">
              <Grid item>
                <Typography
                  sx={{ textTransform: 'capitalize', width: '200px' }}
                >
                  Saturday
                </Typography>
              </Grid>

              <Grid item>
                <Typography>8:00am - 6:00pm</Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <Grid alignItems="center" container justifyContent="space-between">
              <Grid item>
                <Typography
                  sx={{ textTransform: 'capitalize', width: '200px' }}
                >
                  Sunday
                </Typography>
              </Grid>

              <Grid item>
                <Typography>8:00am - 6:00pm</Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>

        <Copyright />
      </Box>
    </Container>
  );
}
