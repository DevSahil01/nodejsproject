
const express = require('express');
const app = express()
const subscriberSchma=require('./models/subscribers')


// Your code goes here
app.get('/subscribers',async (req,res)=>{
    try{
        const data=await subscriberSchma.find()
        res.status(200).json(data)      
    }
    catch(e){
       res.status(400).send({message:"Server error"})
    }
})
app.get('/subscribers/names',async (req,res)=>{
    try{
        const namesData=await subscriberSchma.find({},{name:1,subscribedChannel:1})
        
        res.status(200).json({data:namesData})
    }
    catch(err){
        res.status(400).send({message:"server error!"})
    }
})

app.get('/subscribers/:id',async (req,res)=>{
    try{
        const subsciber=await subscriberSchma.findById(req.params.id)
         if(subsciber!=null){
         res.status(200).json(subsciber) 
         }
         else{
            res.status(400).send({message:"Subscriber not found"})
         } 
    }
    catch(e){
        res.status(400).send({message:"server error!"})
    }
})























module.exports = app;
