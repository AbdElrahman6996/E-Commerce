import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './ComponentsTabs.css'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="Box" sx={{ width: '100%' }}>
      <Box className='topnavbar' sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <div className='describing-container'>
        <Tabs className='tabsweer' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className='describing' label="Description" {...a11yProps(0)} />
          <Tab className='describing' label="Specification" {...a11yProps(1)} />
          <Tab className='describing' label="Reviews" {...a11yProps(2)} />
        </Tabs>
        </div>
      </Box>
      <TabPanel value={value} index={0}>
        <p>The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers.</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p>*Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
          **65C2 Stand model is at a minimum 39% lighter than the C1 series.
          ***The 'Reducing CO2' footprint label applies to 65C2 only. All other C2 models feature a 'CO2 Measured' label.
          ****UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p>The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers.</p>
      </TabPanel>
    </Box>
  );
}
