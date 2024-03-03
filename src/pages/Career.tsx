import React from 'react';
import Education from '../components/Education';
import WorkExperience from '../components/WorkExperience';

const Career: React.FC = () => {
  return (
    <div>
      <h1>経歴</h1>
      <h2>学歴</h2>
      <Education school="大学A" degree="学士号" year="2015-2019" />
      <Education school="大学B" degree="修士号" year="2019-2021" />

      <h2>職歴</h2>
      <WorkExperience company="会社X" position="エンジニア" year="2021-2023" />
      <WorkExperience company="会社Y" position="リーダー" year="2023-present" />
    </div>
  );
};

export default Career;