import express from 'express'
import {addToCart,updateCard,getUserCart} from './../controllers/cartController.js'
import authUser from '../middleware/auth.js'

const cartRouter=express.Router()

cartRouter.post('/get',authUser,getUserCart)
cartRouter.post('/add',authUser,addToCart)
cartRouter.post('/update',authUser,updateCard)

export default cartRouter