const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth.js")
const userRoute= require ("./routes/users.js")
const vehiculeRoute= require ("./routes/vehicule")
const PORT = process.env.PORT || 3000;
dotenv.config();
const app = express();


mongoose.connect(process.env.MONGO_DB_URL)
.then(() => console.log("Mongo DB connection reussie!"))
.catch((err) =>{
    console.log(err);
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/vehicule", vehiculeRoute);


app.listen(PORT, ()=>{
    console.log('Server demarre sur PORT', PORT);
})