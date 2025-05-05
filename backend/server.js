const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.get('/',(req,res)=>{
    res.json("Backend server is running")
})

const diyRouter = require("./controller/diyRouter");
const fitnessRouter = require("./controller/fitnessRouter");
const foodRouter = require("./controller/foodRouter");
const studyRouter = require("./controller/studyRouter");
const aiRouter = require("./controller/aiRouter");


app.use("/diy", diyRouter);
app.use("/fitness", fitnessRouter);
app.use("/food", foodRouter);
app.use("/study", studyRouter);
app.use("/ai", aiRouter);




app.listen(3000, async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Server connected on port 3000");
    } catch (error) {
        console.log("Something went wrong:", error);
    }
});
