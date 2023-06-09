const mongoose = require("mongoose")

const contentSchema={
    name: String,
    passcode:String
}

const Content = mongoose.model("project",contentSchema)

module.exports=Content