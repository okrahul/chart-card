import React, { useState } from 'react';
import { Card, Tabs, Tab, Box, Typography, Stack } from '@mui/material';
import { ChartTab } from './ChartTab';

const tabLabels = ['Summary','Chart', 'Statics', 'Analysis', 'Settings'];

export const MainCard = () => {
  const [tabValue, setTabValue] = useState(tabLabels[1]); 

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Card sx={{ padding: 2, boxShadow: 1, borderRadius: 3 }}>
        <Stack px={2} py={3} justifyContent='flex-start' alignItems='flex-start'>
            <Stack  justifyContent='flex-start' alignItems='flex-start'  direction='row'>
            <Typography sx={{
                fontWeight: 800,
                fontSize: '2.5rem',
            }}>63,179.71</Typography>
        <Typography sx={{
                fontWeight: 800,
                fontSize: '1rem',
                color: 'gray',
                mt:1
            }}>USD</Typography>

            </Stack>
            <Typography variant='body2' sx={{
color: 'green'
            }}>+ 2,161.42 (3.54%)</Typography>
        </Stack>


      <Box 
      sx={{ borderBottom: 0.5, borderColor: 'divider' }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="main tabs"
          sx={{
            '& .MuiTabs-indicator': {
              display: 'none',
            },
          }}
        >
          {tabLabels.map((label) => (
            <Tab
              key={label}
              label={<Typography variant='body2'>{label}</Typography>}
              value={label}
              sx={{
                borderRadius: 0,
                padding: '6px 12px',
                minWidth: 'auto',
                textTransform: 'none',
                borderBottom:  tabValue === label && '1px solid #646bff'
              }}
            />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabValue === 'Chart' && <ChartTab />}
        {tabValue === 'Summary' && <Typography>Summary Content</Typography>}
        {tabValue === 'Statics' && <Typography>Statics Content</Typography>}
        {tabValue === 'Analysis' && <Typography>Analysis Content</Typography>}
        {tabValue === 'Settings' && <Typography>Settings Content</Typography>}
      </Box>
    </Card>
  );
};
