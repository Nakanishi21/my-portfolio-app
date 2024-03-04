import { Paper } from '@mui/material';
import React from 'react';

interface EducationProps {
  school: string;
  degree: string;
  year: string;
  sentences: string[];
}

const Education: React.FC<EducationProps> = ({ school, degree, year, sentences }) => {
  const sentenceWithBreaks = sentences.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
   <Paper elevation={3} sx={{ p: 2, mb: 2, backgroundColor: 'transparent', border: '1px solid #ccc', color: '#00ffcc' }}>
      <h3>{school}</h3>
      <p>{degree}</p>
      <p>{year}</p>
      <p>{sentenceWithBreaks}</p>
    </Paper>
  );
};

export default Education;