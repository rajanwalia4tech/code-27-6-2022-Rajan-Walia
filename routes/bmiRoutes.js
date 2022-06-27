const router = require("express").Router();
const BMIController =  require("../controllers/bmiController/controller");
router.post("/calculate",BMIController.calculateBMI);

module.exports = router;