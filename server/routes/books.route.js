import express from 'express';
import bookController from '../controllers/book.controller.js';
import upload from '../middleware/uplod.middleware.js'
import { requireSignIn } from '../middleware/auth.middleware.js';

const router = express.Router()

router.post("/addbook",requireSignIn, upload.single('coverimage'),bookController.addbook);
router.get("/search/:key",bookController.getbook)
router.get("/books",bookController.getAllBook)
router.delete("/delete/:key",requireSignIn,bookController.deletebook)
export default router;