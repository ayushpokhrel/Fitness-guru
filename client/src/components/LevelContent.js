import React, { useState, useEffect } from 'react';

const LevelContent = ({ gymType, level }) => {
  const [content, setContent] = useState('');
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3005/content?gymType=${gymType}&level=${level}`)
      .then(response => response.json())
      .then(data => {
        setContent(data.content);
        setSteps(data.steps);
      })
      .catch(error => console.error(error));
  }, [gymType, level]);

  return (
    <div>
      <h2>{gymType} - {level} Content</h2>
      <p>{content}</p>
      <h3>Steps:</h3>
      <ol>
        {steps.map(step => (
          <li key={step.stepNumber}>{step.description}</li>
        ))}
      </ol>
    </div>
  );
};

export default LevelContent;
