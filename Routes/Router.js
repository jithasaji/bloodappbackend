const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')

//Register API
router.post('/users/register',userController.register)


//login API
router.post('/users/login',userController.login)

module.exports= router
