import express from 'express';
import { redirectData } from '../Controller/ControllerRedirect.js';




const router=express.Router();
router.get('/',redirectData)

export  default router