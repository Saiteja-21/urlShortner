import express from 'express'
import { postData,getData } from '../Controller/ControllerUrl.js';


const router=express.Router();

router.post('/map',postData)
router.get('/mappings',getData)






export default router