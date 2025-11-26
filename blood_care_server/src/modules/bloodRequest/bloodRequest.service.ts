import { BloodRequestModel } from "./bloodRequest.schema";
import { BloodRequest } from "./bloodRequest.type";

const createBloodRequestInDB = async(payload:Partial<BloodRequest>) => {
    const result  =await BloodRequestModel.create(payload);
    return result;
}

const getAllBloodRequestsFromDB = async() => {
    const result = await BloodRequestModel.find();
    return result;
}

const deleteBloodRequestFromDB = async(id:string) => {
    const result = await BloodRequestModel.findByIdAndDelete(id);
    return result;
}

export const BloodRequestService = {
    createBloodRequestInDB,
    getAllBloodRequestsFromDB,
    deleteBloodRequestFromDB
};