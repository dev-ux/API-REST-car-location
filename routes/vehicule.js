const router = require('express').Router();
const { find } = require('../model/User');
const Vehicule = require('../model/Vehicule');

router.post('/create/new', async(req,res) =>{
const newVehicule = new Vehicule(req.body);

try{
    const savedVehicule = await newVehicule.save();
    res.status(200).json(savedVehicule)
}catch(error){
res.status(500).json(error)
}
});

router.get("/", async(req,res) =>{
    const qNew = req.query.new;
    const qCategory = req.query.Category;
    try{
        let vehicule;

        if(qNew){
            vehicule = await Vehicule.find().sort({createdAt: -1}).limit(1);
        }else if(qCategory){
            vehicule = await Vehicule.find({
                categories: {
                    $in: [qCategory],
                },
            })
        }else{
            vehicule = Vehicule.find();
        }
        req.status(200).json(vehicule);
    }catch (error){
        res.status(500).json(error);
    }
})

module.exports = router;


