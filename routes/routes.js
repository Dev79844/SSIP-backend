const express = require('express');
const { getUser, postUser,timeline } = require('../controllers/controllers')
const router = express.Router();

router.get("/", getUser)
router.post("/idea", postUser)

module.exports = router