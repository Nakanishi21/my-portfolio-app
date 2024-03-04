import { Paper } from '@mui/material';
import React from 'react';

interface WorkExperienceProps {
  company: string;
  position: string;
  year: string;
  sentences: string[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ company, position, year, sentences }) => {
  const sentenceWithBreaks = sentences.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2, backgroundColor: 'transparent', border: '1px solid #ccc', color: '#00ffcc' }}>
      <h3>{company}</h3>
      <p>{position}</p>
      <p>{year}</p>
      <p>{sentenceWithBreaks}</p>
    </Paper>
  );
};

export default WorkExperience;