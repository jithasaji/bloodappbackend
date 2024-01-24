const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')
const donateController = require('../Controllers/donateController')
const requestController = require('../Controllers/requestController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')

// const donateController = require('..')

//Register API
router.post('/users/register',userController.register)

//login API
router.post('/users/login',userController.login)

// get All hospital
router.get('/users/hospital',jwtMiddleware,userController.viewAllHospitals)

//donate
router.post('/donate/donatestatus',jwtMiddleware,donateController.donateStatus)

//getpersondonatestatus
router.get('/donate/getpersondonatestatus',jwtMiddleware,donateController.getpersondonateStatus)

//requestblood

router.post('/request/bloodrequest',jwtMiddleware,requestController.requestblood)

//actions

router.get('/actions/actionstatus',jwtMiddleware,requestController.action)

module.exports= router
