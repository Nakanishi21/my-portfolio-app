import { Paper } from '@mui/material';
import React from 'react';

interface EducationProps {
  school: string;
  degree: string;
  year: string;
}

const Education: React.FC<EducationProps> = ({ school, degree, year }) => {
  return (
   <Paper elevation={3} sx={{ p: 2, mb: 2, backgroundColor: 'transparent', border: '1px solid #ccc', color: '#FF0DC0' }}>
      <h3>{school}</h3>
      <p>{degree}</p>
      <p>{year}</p>
    </Paper>
  );
};

export default Education;