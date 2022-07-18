const express = require("express");
const router = express.Router();
const {
    userRegistration,
    userUpdateDetails,
    userLogin,
} = require("../controller/userController");

router.post("/registration", userRegistration);
router.post("/userupdatedetails", userUpdateDetails);
router.post("/login", userLogin);
module.exports = router;