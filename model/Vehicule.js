const mongoose = require("mongoose")

const VehiculSchema = new mongoose.Schema(
    {
        vehiculename : {type: String, required: true,unique: true},
        desc : {type: String, required: true,unique:true},
        img: {type: String, required: true},
        categorie: {type: Array},
        price: {type: String, required: true},
    },
    {timestamps: true}
);


module.exports = mongoose.model("User", VehiculSchema);
