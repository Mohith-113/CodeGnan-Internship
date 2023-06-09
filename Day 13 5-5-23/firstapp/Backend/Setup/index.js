const express=require("express")
const app=express()
const products=require("./products")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
const Content=require("./schema")

console.log(Content)
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json())

app.use(cors())


mongoose.connect("mongodb+srv://Mohith-Anabathula:Mohith-Anabathula@cluster0.2z0nmuv.mongodb.net/firstdb?retryWrites=true&w=majority")

    .then(()=>{
        console.log("MongoDB Connected Successfully")
    })
    .catch((err)=>{
        console.log(err)
    })

app.get("/",(req,res)=>{
    res.send("Server Started Successfully")
})

// Posting data to db
app.post("/add",(req,res)=>{
    console.log("Data From User",req.body)
    const {name,passcode} = req.body
    const newData = new Content({
        name,passcode
    })
    newData.save()
    res.send("Submited Data Successfully")
})

app.get("/products",(req,res)=>{
    res.json(products)
})

app.get("/name",(req,res)=>{
    res.send("Anabathula Mohith")
})

app.listen(4000,()=>console.log("Server is Started"))