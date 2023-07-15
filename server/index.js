const express=require('express')
const app=express()
const bcrypt=require('bcrypt')
const multer=require('multer')
require ('./conn/connect')
const userModel=require('./models/user.model')
const gymModel=require('./models/gym.model')
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
  if(email=="admin@gmail.com"&&password=="123"){
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
      
          console.log(user)
     
          return res.status(200).json({loggedIn:true, msg: 'Login successful',username:user.username,fullname:user.fname,email:user.email,phone:user.phone,file:user.file});
         
        
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
 const data=await gymModel.find()
  res.json(data)
  // console.log(data)
 }
  catch(err){
    console.log(err)
    res.status(500).json({msg:"server Error"})
  }
  
})
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
