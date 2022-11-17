const express = require("express");
const AppController = require("../Controller/Index");
const router = express.Router();

router.post('/RewardUsersReferrer',AppController);

module.exports = router;