const mongoose=require('mongoose')
const url='mongodb://127.0.0.1:27017/FitnessGuru';
mongoose.connect(url).then(() => {
console.log('MongoDB connected to the server')  })
  .catch((error) => {
    console.error("error connecting",error);
  });

  const GymContent=require('../models/GymContent.model')
  const GymModel=require('../models/gym.model')

  const gymModels = [
    { name: 'Yoga', description: 'Yoga exercises' },
    { name: 'Overall Workout', description: 'Overall workout routines' },
    {name: 'Diet plan', description: 'Diet plan according to your body  '}
  ];

  GymModel.countDocuments({}).maxTimeMS(30000)
  .then((count) => {
    if (count === 0) {
      return GymModel.insertMany(gymModels);
    } else {
      console.log('Already exists');
      
    }
  })


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
    }  ];
  
  // inserting/saving
  GymContent.countDocuments({}).maxTimeMS(30000)
  .then((count) => {
    if (count === 0) {
      return GymContent.insertMany(fitnessData);
    } else {
      console.log('Already exists');
      return Promise.resolve(); 
    }
  })
  .then(() => {
    console.log('GoodToGo');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error(error);
    mongoose.connection.close();
  });
  
  