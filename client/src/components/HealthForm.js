import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const HealthForm = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [gender,setGender]=useState('male')
  const [bmi, setBMI] = useState('');
  const [bmr, setBMR] = useState('');
  const [programLevel, setProgramLevel] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const[visibility,setVisibility]=useState('hidden')

  const handleSubmit = (e) => {
    e.preventDefault();
    setVisibility('visible')

    // Calculate BMI
    const heightInInches = parseInt(heightFeet) * 12 + parseInt(heightInches);
    const heightinMeters = heightInInches * 0.0254;
    const weightInKg = parseInt(weight);
    const bmiValue = weightInKg / (heightinMeters * heightinMeters);
    setBMI(bmiValue.toFixed(2));

    // Calculate BMR
    // Assuming user's gender and activity level
    const gender = 'male'; // Replace with 'female' for female users
    const activityLevel = 1.2; // Assuming sedentary activity level
    let bmrValue;
    if (gender === 'male') {
      bmrValue = 66 + 6.2 * weightInKg + 12.7 * heightInInches - 6.76 * parseInt(age);
    } else if(gender==="female"||"other") {
      bmrValue = 655 + 4.35 * weightInKg + 4.7 * heightInInches - 4.7 * parseInt(age);
    }
    setBMR(bmrValue.toFixed(2));

    // Calculate Program Level and Recommendation
    let programLevelValue;
    if (bmiValue < 18.5) {
      programLevelValue = 'Beginner';
      setRecommendation('You are underweight. Please focus on gaining weight.');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      programLevelValue = 'Intermediate';
      setRecommendation('Congratulations! You are within the healthy weight range.');
    } else {
      programLevelValue = 'Advanced';
      setRecommendation('You are overweight. Please focus on losing weight.');
    }
    setProgramLevel(programLevelValue);

  const userinfo= JSON.parse(Cookies.get('user'));
    

    const healthData = {
      userId:userinfo.id,
      age,
      weight: weightInKg,
      heightFeet: parseInt(heightFeet),
      heightInches: parseInt(heightInches),
      bmi: bmiValue,
      bmr: bmrValue,
      programLevel: programLevelValue,
      gender
    };
    console.log(healthData)

    axios
      .post('http://localhost:3005/saveHealthData', healthData)
      .then((response) => {
        console.log(response.data);
        // Optionally, you can show a success message or perform other actions here
      })
      .catch((error) => {
        console.error('Error saving health data:', error);
        // Optionally, you can show an error message or perform other actions here
      });
  };

  return (
    <div className='healthdiv'>
      <h2>Health Data Form</h2>

    <div className='healthWrapper'>
      <form className='formhealth' onSubmit={handleSubmit}>
        <label>Age:    </label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        <br />
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select><br/>
        <label>Weight (in kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <br />
        <label>Height (in feet and inches):</label><br/>
        <input
          type="number"
          placeholder="Feet"
          value={heightFeet}
          onChange={(e) => setHeightFeet(e.target.value)}
        />
        <input
          type="number"
          placeholder="Inches"
          value={heightInches}
          onChange={(e) => setHeightInches(e.target.value)}
        />
        <br />
        <button type="submit">Calculate and Save</button>
      </form>
      <div className='healthResult' style={{visibility}}>
        <h3>Calculated Data:</h3>
        <p>BMI: {bmi}</p>
        <p>BMR: {bmr}</p>
        <p>Program Level: {programLevel}</p>
        <p>Recommendation: {recommendation}</p>
      </div>
    </div>
    </div>
  );
};
export default HealthForm;

