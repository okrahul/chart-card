import React, { useState, useRef } from 'react';
import { options } from '../utils/mock'
import {toggleFullscreen} from '../utils/fullScreen'
import { Box, Stack, Tabs, Button, Typography } from '@mui/material';
import { Chart } from './Chart';
import { CustomTab } from './CustomTab';

const CustomButton = ({ title, icon, onClick }) => {
  return (
    <Button sx={{ textTransform: 'none' }} onClick={onClick}>
      <Stack direction='row' alignItems='center' spacing={0.5}>
        <ion-icon name={icon}></ion-icon>
        <Typography variant='body3' color='gray'>{title}</Typography>
      </Stack>
    </Button>  
  );
};

export const ChartTab = () => {
  const [tabValue, setTabValue] = useState('1d');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const chartContainerRef = useRef(null);

  const handleTabChange = (_event, newValue) => {
    setTabValue(newValue);
  };

  const handleFullscreenToggle = () => {
    if (chartContainerRef.current) {
      toggleFullscreen(chartContainerRef.current, setIsFullscreen);
    }
  };

 

  return (
    <Box>
      <Stack spacing={2} justifyContent="space-between" alignItems="center" direction="row" p={2}>
        <Stack alignItems="center" direction='row'>
          <CustomButton title='Fullscreen' icon='expand-outline' onClick={handleFullscreenToggle} />
          <CustomButton title='Compare' icon='add-circle-outline' />
        </Stack>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="chart tabs"
          sx={{
            '& .MuiTabs-indicator': {
              display: 'none', 
            },
          }}
        > 
          <CustomTab label="1D" value="1d" tabValue={tabValue} />
          <CustomTab label="3D" value="3d" tabValue={tabValue} />
          <CustomTab label="1W" value="1w" tabValue={tabValue} />
          <CustomTab label="1M" value="1m" tabValue={tabValue} />
          <CustomTab label="6M" value="6m" tabValue={tabValue} />
          <CustomTab label="1Y" value="1y" tabValue={tabValue} />
        </Tabs>
      </Stack>
      <Box
        ref={chartContainerRef}
        sx={{
          width: '100%',
          height:  isFullscreen ? 'auto' : 'auto', 
          position: 'relative',
          transition: 'height 0.3s ease'
        }}
      >
        <Chart options={options[tabValue]} />
      </Box>
    </Box>
  );
};


