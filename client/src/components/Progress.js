import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const ProgressTracker = () => {
  const [previousHealthData, setPreviousHealthData] = useState(null);
  const [recentHealthData, setRecentHealthData] = useState(null);


  useEffect(() => {
    const userId = JSON.parse(Cookies.get('user')).id;
    


    // Fetch previous health data
    axios.get(`http://localhost:3005/getPreviousHealthData/${userId}`)
      .then((response) => {
        setPreviousHealthData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching previous health data:', error);
      });

    // Fetch recent health data
    axios.get(`http://localhost:3005/getRecentHealthData/${userId}`)
      .then((response) => {
        setRecentHealthData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recent health data:', error);
      });
  }, []);
const username=JSON.parse(Cookies.get('user')).username;
  if (!previousHealthData || !recentHealthData) {
    // Show loading or placeholder while data is being fetched
    return <div>Loading...</div>;
  }

  // Display previous and recent health data
  return (
    <div className='progressMaindiv'>
      <h2 className='progressHeader'>Progress Tracker</h2>
      <p className='upr'> {username}'s Progress Report </p>

      <div className='progressWrapper'>
      <div className='progressFirstdiv'>
        <h3>Previous Health Data</h3>
        <p>BMI: {previousHealthData.bmi}</p>
        <p>BMR: {previousHealthData.bmr}</p>
        {/* Display other health data properties here */}
      </div>
      <div className='vs'>VS</div>
      <div className='progressSeconddiv'>
        <h3>Recent Health Data</h3>
        <p>BMI: {recentHealthData.bmi}</p>
        <p>BMR: {recentHealthData.bmr}</p>
        {/* Display other health data properties here */}
      </div>
    </div>
    <p className='progresssuggestion'>Want to track your newest progress? go to Level Analyzer page</p>
    </div>
  );
};

export default ProgressTracker;
