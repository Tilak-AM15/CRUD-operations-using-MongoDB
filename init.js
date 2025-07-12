const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
main().then((res)=>console.log("success")).catch((err)=>console.log(err));
async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
  
}
  Chat.insertMany([
    {
    from:"Neha",
    to:"Priya",
    msg:"Hello How are you?",
    created_at:new Date()
  },
  {
    from:"Ravi",
  to:"basu",
  msg:"Send notes please",
  created_at:new Date()
  },
  {
  from:"tilak",
  to:"sharanabasava",
  msg:"lets play together",
  created_at:new Date()
  },
])