const express=require('express')
const app=express()
const bcrypt=require('bcrypt')
const multer=require('multer')
require ('./conn/connect')
const userModel=require('./models/user.model')
const gymModel=require('./models/gym.model')
const HealthData = require('./models/healthData.model.js');
const GymContent=require('./models/GymContent.model')
const port=3005;
const router=express.Router();
const cors=require('cors')
app.use(cors())
app.use(express.json())




const storagepp = multer.diskStorage({
  destination: './profiles/', // Directory to save the uploaded files
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Generate unique file names
  },
});
const uploadpp = multer({ storage:storagepp });

router.post('/register',uploadpp.single('file'),(req,res)=>{
  const {username,email,phone,password,fname}=req.body
  const files= req.file;
  const filesPath = files ? files.path : '';
  bcrypt.hash(password,10,(err,hash)=>{
    if(err){
      return res.json({msg:'Error hashing password'})
    }
   userModel.findOne({$or:[{username:username},{email:email}]}).then((existingUser)=>{
    if(existingUser){
    return res.json({msg:"user already exists"})
    }
    userModel({username,email,phone,password:hash,fname,file:filesPath}).save()
   .then((data)=>{console.log(data +"saved successsfully")
   res.json({msg:"saved successfully"})
 
 })
   }) .catch((error)=>{
        res.json({error:"Error Checking existing user"})
   })
   
})
  // console.log({name,email,password:hash})
})




router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if(email=="admin@gmail.com"&&password=="admin123"){
   console.log("Admin")

   return res.json({loggedIn:true,username:"Admin",email});
  }
  userModel.findOne({ email })
    .then(user => {
      if (!user) {
        return res.json({  loggedIn: false,msg: 'User not found' });
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.send(err + 'occurred');
        }
        if (result) {
      
          // console.log(user)
     
          return res.status(200).json({loggedIn:true, msg: 'Login successful',username:user.username,fullname:user.fname,email:user.email,phone:user.phone,file:user.file,id:user._id});
         
        
        } else {
         
          return res.json({ loggedIn:false,msg: 'Invalid credentials' });
        }
      });
      
    })
    .catch((error) => console.log(error));
});


router.get('/loggedIn', (req, res) => {
 
    return res.json({ loggedIn: true});
   
  });



  router.get('/logout',(req,res)=>{
    return res.json({  loggedIn:false,msg: 'Logout successful' });
  })




  const storage = multer.diskStorage({
    destination: './profiles/types/', // Directory to save the uploaded files
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Generate unique file names
    },
  });
  const upload = multer({ storage });




router.post('/gymtype',upload.single('file'), async(req,res)=>{
  const {name,description}=await req.body
  const file=await req.file;
  const filePath = file ? file.path : '';
  gymModel({name,description,file:filePath}).save().then((data)=>{console.log(`saved ${data}`)})
  res.send('saved')

})

router.get('/gymtype',async (req,res)=>{
  // console.log(req.body)
 try{
  //go to admin panel and add gym models on your own with correct name and then hit upload assets.
 const data=await gymModel.find()
  res.json(data)
  // console.log(data)
 }
  catch(err){
    console.log(err)
    res.status(500).json({msg:"server Error"})
  }
  
})




router.post('/saveHealthData', async (req, res) => {
  try {
    const { userId, age, weight, heightFeet, heightInches, bmi, bmr, programLevel,gender } = req.body;

    // Check if the user exists
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    // Save health data using the HealthData model
    const healthData = new HealthData({
      user: userId,
      age,
      weight,
      heightFeet,
      heightInches,
      bmi,
      bmr,
      programLevel,
      gender
    });
    const savedHealthData = await healthData.save();

    res.json({ msg: 'Health data saved successfully', healthData: savedHealthData });
  } catch (error) {
    console.error('Error saving health data:', error);
    res.status(500).json({ msg: 'Server error' });
  }
});

//previous or recent healthData

router.get('/getPreviousHealthData/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const allHealthData = await HealthData.find({ user: userId }).sort({ createdAt: -1 });

    if (allHealthData.length < 2) {
      return res.status(404).json({ msg: 'Previous health data not found' });
    }

    const previousHealthData = allHealthData[1]; // Second entry in the sorted array is the previous data

    res.json(previousHealthData);
  } catch (error) {
    console.error('Error fetching previous health data:', error);
    res.status(500).json({ msg: 'Server error' });
  }
});

router.get('/getRecentHealthData/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const recentHealthData = await HealthData.find({ user: userId })
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order to get the latest entry
      .limit(1) // Limit to one entry to get the most recent entry
      .exec();

    if (!recentHealthData) {
      return res.status(404).json({ msg: 'Recent health data not found' });
    }

    res.json(recentHealthData[0]); // Return the first (and only) entry as recentHealthData
  } catch (error) {
    console.error('Error fetching recent health data:', error);
    res.status(500).json({ msg: 'Server error' });
  }
});

//gymtypes level finallllllll

router.get('/content', (req, res) => {
  const { gymType, level } = req.query;

  GymContent.findOne({ gymType, level })
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ error: 'Content not found' });
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    });
});
















app.use('/profiles', express.static('profiles'));

router.get('/users',async(req,res)=>{
 try{
  const users=await userModel.find({});
  res.json(users)
 } catch(error){
  res.json({error:"error fetching users"})
 }
})
router.delete('/users/:id',async(req,res)=>{
try{
  const userId=req.params.id;
  const deletedUser=await userModel.findByIdAndDelete(userId)
  if(!deletedUser){
    return res.json({msg:"user not found"});
  }
  res.json({msg:"User deleted successfully"})
  
}
catch(error){
   res.json({error:"Server error"}) 
}
})





app.listen(port,(req,res)=>{
  console.log(`app listening on port ${port}`)
})

app.use('/',router)
