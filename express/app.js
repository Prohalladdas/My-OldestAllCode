const exprees = require("express");
const app = express();
const post =80;

app.get("/",(req,res)=>{
    res.status(200).send("This is home page");
});
app.get("/about",(req,res)=>{
    res.send("This is about page");
});
app.post("/service",(req,res)=>{
    res.send("This is service page");
});
app.get("/this",(req,res)=>{
    res.status(404).send("This page is not found");
});

app.listen(post,()=>{
    console.log(`The application stared successfully on post ${post}`);
});

