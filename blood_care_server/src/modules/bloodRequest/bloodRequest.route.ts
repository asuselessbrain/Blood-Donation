import express from 'express';
import { BloodRequestController } from './bloodRequest.controller';


const router = express.Router();

router.post('/', BloodRequestController.createBloodRequestInDB);
router.get('/', BloodRequestController.getAllBloodRequestsFromDB);
router.delete('/:id', BloodRequestController.deleteBloodRequestFromDB);

export const bloodRequestRouter = router;