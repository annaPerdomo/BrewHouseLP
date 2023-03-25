import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import { ListItem } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" component="h1">
          BREW HOUSE
        </Typography>

        <Typography variant="h5" gutterBottom>
          La Puente
        </Typography>
        <br />
        <Typography variant="h3" gutterBottom>
          Menu
        </Typography>

        <br />

        <Typography variant="h5">Address</Typography>
        <Typography>111 S 1st St</Typography>
        <Typography>La Puente, CA 91744</Typography>

        <br />

        <Typography variant="h5">Hours</Typography>

        <List dense>
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
