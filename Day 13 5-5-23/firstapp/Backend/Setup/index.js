const express=require("express")
const app=express()
const products=require("./products")

app.get("/",(req,res)=>{
    res.send("Server Started Successfully")
})

app.get("/products",(req,res)=>{
    res.json(products)
})

app.get("/name",(req,res)=>{
    res.send("Anabathula Mohith")
})

app.listen(4000,()=>console.log("Server is Started"))