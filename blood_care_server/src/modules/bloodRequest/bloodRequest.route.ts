import express from 'express';
import { BloodRequestController } from './bloodRequest.controller';


const router = express.Router();

router.post('/', BloodRequestController.createBloodRequestInDB);

export const bloodRequestRouter = router;