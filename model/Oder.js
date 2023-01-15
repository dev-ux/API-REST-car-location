const mongoose = require("mongoose")

const OderSchema = new mongoose.Schema(
    {
        userId : {type: String, required: true},

       vehicule: [
        {

        Idvehicule: {
            type: String,
        },
        quantity: {
            type: Number,
            default: 1,
        },

       }

       ],
      /* montant: {type: Number, required: true},
       adress: {type: Object, required: true},
       status: {type: String, default: "pending"},*/

    },
    {timestamps: true}
);


module.exports = mongoose.model("Oder", OderSchema);
