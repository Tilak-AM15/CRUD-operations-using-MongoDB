const mongoose=require("mongoose");
const chatSchems=new mongoose.Schema({
  from:{
    type: String,
    required : true 
  },
  to:{
    type:String,
    required : true
  },
  msg:{
    type: String,
    maxlength:50
  },
  created_at:Date
})
const Chat=mongoose.model("chat",chatSchems);
module.exports=Chat;