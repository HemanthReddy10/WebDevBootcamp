const express = require("express");
const app = express();
const path=require('path');
const redditData=require('./data.json');

app.use(express.static(path.join(__dirname,'/public')));   //to get access in the entire folder
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.get("/", (req, res) => {
  res.render('home.ejs');
});
app.get("/rand", (req, res) => {
  let num=Math.floor(Math.random()*10)+1;
  res.render('random.ejs',{num});
});
app.get("/r/:subreddit", (req, res) => {
  const {subreddit}=req.params;
  const data=redditData[subreddit];
  // res.render('subreddit.ejs',{subreddit});
  res.render('subreddit',{...data});
  // we are using spread to get access to internal values of data 
});
app.get("/cats", (req, res) => {
  const cats=['Blue','rocket','cuty','lycu']
  res.render('cats',{cats});
});


app.listen(3000, () => {
  console.log("listening on port 3000");
});
