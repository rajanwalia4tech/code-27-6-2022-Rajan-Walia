const  performCalculation = require('./utils');
class BMIController{
    calculateBMI = (req,res)=>{
        try{
            const usersData = req.body.usersData;
            console.log(usersData)
            const response = performCalculation(usersData);
            return res.status(200).send(response);
        }catch(err){
            return res.status(400).send({
                message : "Something went wrong"
            })
        }
    }

}

module.exports = new BMIController();