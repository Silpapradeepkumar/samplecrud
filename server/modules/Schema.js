import mongoose,{Schema,model} from "mongoose";


const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true});


const User = model("userData",userSchema);
export default User;