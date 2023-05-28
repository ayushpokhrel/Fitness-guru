const express=require('express')
const app=express()
const bcrypt=require('bcrypt')
const session = require('express-session');
require ('./conn/connect')
const userModel=require('./models/user.model')
const gymModel=require('./models/gym.model')
const port=3005;
const router=express.Router();
const cors=require('cors')
app.use(cors())
app.use(express.json())

// Set up express-session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));



app.listen(port,(req,res)=>{
  console.log(`app listening on port ${port}`)
})

router.get('/',(req,res)=>{
  res.send('hi')
})

router.post('/register',(req,res)=>{
  const {name,email,password}=req.body

  bcrypt.hash(password,10,(err,hash)=>{
    if(err){
      return res.json({error:'Error hashing password'})
    }
    userModel({name,email,password:hash}).save()
    .then((data)=>{console.log(data +"saved successsfully")
    res.send('saved successfully')
  
  })})
  // console.log({name,email,password:hash})
  
})


router.post('/login', (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.send(err + 'occurred');
        }
        if (result) {
          req.session.user=user

          return res.status(200).json({loggedIn:true, msg: 'Login successful' });
        } else {
          return res.status(401).json({ loggedIn:false,msg: 'Invalid credentials' });
        }
      });
      
      

    })
    .catch((error) => console.log(error));

});

router.get('/loggedIn', (req, res) => {
  // console.log(req.session.user)
  if (req.session){
    console.log(req.session)
    return res.json({ loggedIn: true, username:req.session.user.name });
  } else {
    return res.json({ loggedIn: false });
  }
});

router.post('/gymtype',async(req,res)=>{

  const {name,discription,url}=await req.body
  gymModel({name,discription,url}).save().then((data)=>{console.log(`saved ${data}`)})
  res.send('saved')
})

router.get('/gymtype',async (req,res)=>{
  // console.log(req.body)

 try{
 const data=await gymModel.find()


  res.json(data)
  console.log(data)
 }
  catch(err){
    console.log(err)
    res.status(500).json({msg:"server Error"})
  }
  
})

app.use('/',router)


