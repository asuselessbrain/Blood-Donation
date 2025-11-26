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

const getAllBloodRequestsFromDB = async (req: Request, res: Response) => {
    try {
        const result = await BloodRequestService.getAllBloodRequestsFromDB();
        res.status(200).json({
            success: true,
            message: "Blood requests retrieved successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve blood requests",
            error: (error as Error).message,
        });
    }
}

const deleteBloodRequestFromDB = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await BloodRequestService.deleteBloodRequestFromDB(id as string);
        res.status(200).json({
            success: true,
            message: "Blood request deleted successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete blood request",
            error: (error as Error).message,
        });
    }
}

export const BloodRequestController = {
    createBloodRequestInDB,
    getAllBloodRequestsFromDB,
    deleteBloodRequestFromDB
};