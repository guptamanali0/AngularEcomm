
import mongoose  from 'mongoose';
const url="mongodb://127.0.0.1:27017/userAuthentication"

mongoose.connect(url)
console.log("Succesfully connected")


const  userEmail =mongoose.Schema({
    Name:String,
    Email:String,
    Password:String
})

const Car = mongoose.model("userEntry",userEmail)
  let dataBase;
const addUserDetails=(addEmail,addName,addPassword)=>{
    console.log("inside addUserDetails")
  const email1=new Car({
    Name:addName,
    Email:addEmail,
    Password:addPassword
})
 email1.save("Successfully saved")
 const output = Car.find({}).Schema
 console.log(output,'outptu')
}

const verifyUser = (addEmail,addPassword)=>{
 Car.collection('userentries').find({}).toArray((err,result)=>{
   if(err)
    console.log(err,'error')
    else
        console.log(result,"MY RSU;KT")
    
});
// console.log(output,'output');
// console.log(out,'user');
// console.log(out)
}

export default {mongoose,addUserDetails,verifyUser}