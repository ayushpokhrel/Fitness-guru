const mongoose = require('mongoose');
// const GymContent = require('./models/GymContent');
const GymContent =require('./models/GymContent.model');

mongoose.connect('mongodb://localhost:27017/FitnessGuru', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fitnessData = [
    {
      gymType: 'Yoga',
      level: 'beginner',
      steps: [
        { stepNumber: 1, description: 'Start with deep breathing exercises' },
        { stepNumber: 2, description: 'Practice basic yoga asanas' },
        { stepNumber: 3, description: 'End with relaxation and meditation' },
      ],
    },
    {
      gymType: 'Yoga',
      level: 'intermediate',
      steps: [
        { stepNumber: 1, description: 'Explore advanced asanas and flows' },
        { stepNumber: 2, description: 'Focus on breathing techniques' },
        { stepNumber: 3, description: 'Incorporate balancing poses' },
      ],
    },
    {
      gymType: 'Yoga',
      level: 'advanced',
      steps: [
        { stepNumber: 1, description: 'Explore advanced asanas and flows' },
        { stepNumber: 2, description: 'Focus on breathing techniques' },
        { stepNumber: 3, description: 'Incorporate balancing poses' },
      ],
    },
    {
      gymType: 'Overall Workout',
      level: 'beginner',
      steps: [
        { stepNumber: 1, description: 'Warm-up with light cardio' },
        { stepNumber: 2, description: 'Perform bodyweight exercises' },
        { stepNumber: 3, description: 'Cool down and stretch' },
      ],
    },
    {
      gymType: 'Overall Workout',
      level: 'intermediate',
      steps: [
        { stepNumber: 1, description: 'Use resistance bands for added challenge' },
        { stepNumber: 2, description: 'Incorporate plyometric movements' },
        { stepNumber: 3, description: 'Include core-strengthening exercises' },
      ],
    },
    {
      gymType: 'Overall Workout',
      level: 'advanced',
      steps: [
        { stepNumber: 1, description: 'Perform high-intensity interval training (HIIT)' },
        { stepNumber: 2, description: 'Lift weights and focus on muscle groups' },
        { stepNumber: 3, description: 'Explore advanced training techniques' },
      ],
    },
    {
      gymType: 'Diet plan',
      level: 'beginner',
      steps: [
        { stepNumber: 1, description: 'Understand macronutrients and portion sizes' },
        { stepNumber: 2, description: 'Plan balanced meals with whole foods' },
        { stepNumber: 3, description: 'Stay hydrated throughout the day' },
      ],
    },
    {
      gymType: 'Diet plan',
      level: 'intermediate',
      steps: [
        { stepNumber: 1, description: 'Explore personalized meal planning' },
        { stepNumber: 2, description: 'Incorporate superfoods and antioxidants' },
        { stepNumber: 3, description: 'Adjust diet based on energy needs' },
      ],
    },
    {
      gymType: 'Diet plan',
      level: 'advanced',
      steps: [
        { stepNumber: 1, description: 'Optimize macronutrient ratios for goals' },
        { stepNumber: 2, description: 'Consider timing of meals and nutrients' },
        { stepNumber: 3, description: 'Monitor and adjust diet for optimal results' },
      ],
    },
    // Add more entries for different types and levels...
  ];
  
  // Insert the dummy data into the database
  GymContent.insertMany(fitnessData)
    .then(() => {
      console.log('Dummy data inserted successfully');
      mongoose.connection.close();
    })
    .catch(error => {
      console.error(error);
      mongoose.connection.close();
    });
  