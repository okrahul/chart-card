import React from 'react';
import { Tab, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledTab = styled(Tab)(({ theme, active }) => ({
  backgroundColor: active ? '#646bff' : '#FFFFFF', 
  color: active ? '#fff' : '#000',
  borderRadius: theme.shape.borderRadius,
  padding: '2px 8px',
  fontSize: '0.75rem',
  minWidth: 'auto',
  '&.Mui-selected': {
    backgroundColor: '#646bff', 
    color: '#fff',
  },
  '&:hover': {
    backgroundColor: active ? '#646bff' : '#E0E0E0',
  },
}));

export const CustomTab = ({ label, value, tabValue, ...props }) => {
  return (
    <StyledTab
      label={<Typography variant='body2'>{label}</Typography>}
      value={value}
      active={tabValue === value}
      {...props}
    />
  );
};
