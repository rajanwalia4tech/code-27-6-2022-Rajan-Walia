const router = require("express").Router();

const bmiRoutes = require("./bmiRoutes");

router.use("/bmi",bmiRoutes);

module.exports = router;