import { Typography } from '@mui/material';
import Box from '@mui/system/Box';

import useDeviceSize from '../hooks/useDeviceSize';

export default function AboutUs() {
  const { width } = useDeviceSize();
  const isMobile = width <= 500;

  return (
    <div>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ color: 'common.black', textAlign: 'center', marginBottom: '1%' }}
      >
        About Us
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2%',
          flexDirection: isMobile ? 'column-reverse' : 'row',
        }}
      >
        <div style={{ flex: 2 }}>
          <Typography sx={{ color: 'common.black' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            cursus enim nec turpis pellentesque, at varius massa lacinia. Nam
            accumsan tellus quam, ut porta orci posuere in. Proin quis neque sed
            ante pretium condimentum. Duis hendrerit sem non sem scelerisque
            finibus. Nunc ut hendrerit eros. Ut ullamcorper ex enim, quis
            imperdiet dui varius vel. Maecenas ligula est, aliquet quis urna in,
            tristique commodo leo. Maecenas tincidunt magna lectus. Maecenas
            justo eros, suscipit et ex ac, finibus lacinia odio.
          </Typography>

          <Typography sx={{ color: 'common.black' }}>
            Follow us on Instagram:
            <a
              href="https://www.instagram.com/thebrewhouselp/"
              style={{
                verticalAlign: 'middle',
              }}
            >
              <img
                src="https://imgur.com/GBaIP5I.png"
                height="50px"
                width="50px"
                alt="Instagram: TheBrewHouseLP"
                title="Follow us on Instagram!"
              />
            </a>
          </Typography>
        </div>
        <div
          style={{
            alignContent: 'center',
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <img
            src="https://imgur.com/MvGEluY.jpeg"
            height="350"
            width="350"
            style={{ borderRadius: '25px' }}
          />
        </div>
      </div>
    </div>
  );
}
