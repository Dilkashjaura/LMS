import express from 'express';
import addbookController from '../controllers/addbook.controller.js';
import upload from '../middleware/uplod.middleware.js'

const router = express.Router()

router.post("/addbook", upload.single('coverimage'), addbookController.addbook)
export default router;