const express=require ("express");
const app=express ();
const mongoose=require("mongoose");
const Chat=require ("./models/chat.js");
const methodOverride=require("method-override")
let port=3000;

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(methodOverride("_method"))

const path=require ("path");
app.set;("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))

main().then((res)=>console.log("success")).catch((err)=> console.log(err));

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
}

 app.listen(port,()=>console.log("listening to port 3000....."));// Tab to edit

 //index route
app.get("/chats",async(req,res)=>
  {
    let chats=await Chat.find();
    console.log(chats.created_at);
    res.render("index.ejs",{chats});
  })



//new route 
app.get("/chats/new",(req,res)=>{
  res.render("new.ejs");
})

//create route 
app.post("/chats",(req,res)=>{
  let{from,to,msg}=req.body;

  let newChat=new Chat({
    from:from,
    to:to,
    msg:msg,
    created_at:new Date()
  });


  newChat.save().then((res)=>console.log("chat saved"))
  .catch((err)=>console.log(err));
  res.redirect("/chats");
})

//edit route
app.get("/chats/:id/edit",async(req,res)=>{
  let {id}=req.params;
  let chat= await Chat.findById(id);
  res.render("edit.ejs",{chat})
})

//update route
app.put("/chats/:id",async(req,res)=>{
  let{id}=req.params;
  let{msg:newMsg}=req.body;
  let updateChat=await Chat.findByIdAndUpdate(
    id,
    {
      msg:newMsg
    }
  );
  res.redirect("/chats");
})

//delete route
app.delete("/chats/:id",async(req,res)=>{
  let{id}=req.params;
  let deleteChat=await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});