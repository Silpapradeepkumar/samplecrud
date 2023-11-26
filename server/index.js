import express from 'express';
import mongoose,{Schema} from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import User from './modules/Schema.js';


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

dotenv.config();
// **************

app.post('/api/hosting',async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const user = new User({name,email,password});
        const savedUser = await user.save();
        res.json(savedUser);
        
    } catch (error) {
        console.log(error.message);
    }
})

app.get('/api/hosting',async(req,res)=>{
    try {
        const result = await User.find();
        res.json(result);
    } catch (error) {
        console.log(error.message);
    }
})

app.get('/api/hosting/:id',async(req,res)=>{
    const {id} = req.params;
    try {
        const result1 = await User.findById(id);
        res.json(result1);
    } catch (error) {
        console.log(error.message);
    }
})
app.put('/api/hosting/:id',async(req,res)=>{
    const {id} = req.params;
    const {name,email,password}= req.body;
    try {
       const updatedUser=await User.findByIdAndUpdate(id,{$set:{name,email,password}},{new:true});
        res.json(updatedUser);
    } catch (error) {
        console.log(error.message);
    }
})
app.delete('/api/hosting/:id',async(req,res)=>{
    const {id} = req.params;
    const {name,email,password}= req.body;
    try {
       const deletedUser=await User.findByIdAndDelete(id);
        res.json(deletedUser);
    } catch (error) {
        console.log(error.message);
    }
})

// **************


const connect = async(req,res)=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected successfully");
    }catch(error){
        console.log(error.message);
    }
    
}

app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`);
    connect();
})