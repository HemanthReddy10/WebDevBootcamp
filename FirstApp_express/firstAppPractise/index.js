const express = require("express");
const app = express();
// console.dir(app)    gives all the directory information

// This will run for any incoming requests
// app.use((req,res) => {
//   console.log("we got a new request");
//   res.send('<h1>Hemanth Reddy Yaramala First Express App</h1>');

// });

// Routing
// /cats => 'meow'
// / => 'welcome to home'
app.get("/", (req, res) => {
  res.send("welcome to home!!!");
});
app.get("/cats", (req, res) => {
  res.send("meow");
});
app.get("/dogs", (req, res) => {
  res.send("bow bow");
});
// if we use : that is pattern matching
app.get("/r/:variable",(req,res)=>{
    console.log(req.params);
    const {variable}=req.params;
    
    res.send(`some variable name you are searching is ${variable} `);
})
app.get("/r/:variable1/:variable2",(req,res)=>{
    console.log(req.params);
    const {variable1,variable2}=req.params;
    
    res.send(`some variable name extra you are searching is ${variable2} `);
})

// query strings 
app.get("/search",(req,res)=>{
    console.log(req.query);         //important is req.query
    const {q}=req.query;
    
    res.send(`search results for ${q} `);
})
// we should always put this request at the end as a default one
app.get("*",(req,res)=>{
    res.send('I dont know wth are you talking about');
})
app.post("/dogs", (req, res) => {
  res.send("bow bow");
});

// This will show our app on port 3000
app.listen(3000, () => {
  console.log("listening on port 3000");
});
