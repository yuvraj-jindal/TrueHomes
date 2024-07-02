import express from 'express';
import {verifyUser} from '../utils/verifyUser.js'
import { createListing, getListing ,deleteListing, updateListing} from '../controllers/listing.controller.js';

const router = express.Router();

router.post('/create',verifyUser,createListing)
router.delete('/delete/:id',verifyUser,deleteListing)
router.get('/getlisting/:id',verifyUser,getListing)
router.post('/updatelisting/:id',verifyUser,updateListing)

export default router