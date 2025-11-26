import { Request, Response } from 'express';
import { BloodRequestService } from './bloodRequest.service';


const createBloodRequestInDB = async (req: Request, res: Response) => {
    const payload = req.body;
    try {
        const result = await BloodRequestService.createBloodRequestInDB(payload);
        res.status(201).json({
            success: true,
            message: "Blood request created successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create blood request",
            error: (error as Error).message,
        });
    }
}

export const BloodRequestController = {
    createBloodRequestInDB,
};