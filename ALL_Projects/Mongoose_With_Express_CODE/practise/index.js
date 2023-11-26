// importing required things
const express=require('express');
const app= express();
const path=require('path');
const mongoose=require('mongoose');
const Product=require('./models/product');



// Connecting to mongoose 
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// Giving access to views folder and setting the ejs 
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');



// Routes 

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
})



app.get('/Products/:id',async(req,res)=>{
    const {id}=req.params;
    const product=await Product.findById(id);
    // console.log(product)
    res.render('products/show',{product})

})




// showing our app on port 3000 
app.listen(3000,()=>{
    console.log('app listening on port 3000');
})
