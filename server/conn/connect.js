const mongoose=require('mongoose')
const url='mongodb://localhost:27017/FitnessGuru'
mongoose.connect(url).then(() => {
console.log('MongoDB connected to the server')  })
  .catch((error) => {
    console.error("error connecting",error);
  });
  