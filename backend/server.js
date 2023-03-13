
import express from 'express';
import mongoose from './modules/api.js'
import cors from 'cors'
// import mongoose from 'mongoose';
const app = express();
const PORT = 4001;
app.use(cors());
 

app.get("/signup", (req, res) => {
  const addName = req.query.name
  const addEmail = req.query.email
  const addPassword = req.query.password

   console.log(addEmail,'emai;')
   console.log(addName,'name')
   console.log(addPassword,'oassword')

  const out ={
      status:200,
      resMsg:"Successfully Login"
  }
  mongoose.addUserDetails(addEmail,addName,addPassword)
  console.log(out);
  res.send(out);  
});

app.get("/login", (req, res) => {
  const addEmail = req.query.email
  const addPassword = req.query.password

   console.log(addEmail,'emai;')
   console.log(addPassword,'oassword')
   

  const out ={
      status:200,
      resMsg:"Successfully Login"
  }
  const result = mongoose.verifyUser(addEmail,addPassword)
    console.log(result,'result')
  console.log(out);
  res.send(out);  
});

app.listen(PORT)
console.log("Server is running")