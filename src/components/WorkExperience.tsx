import { Paper } from '@mui/material';
import React from 'react';

interface WorkExperienceProps {
  company: string;
  position: string;
  year: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ company, position, year }) => {
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2, backgroundColor: 'transparent', border: '1px solid #ccc', color: '#FF0DC0' }}>
      <h3>{company}</h3>
      <p>{position}</p>
      <p>{year}</p>
    </Paper>
  );
};

export default WorkExperience;