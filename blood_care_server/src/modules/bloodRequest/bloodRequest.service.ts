import { BloodRequestModel } from "./bloodRequest.schema";
import { BloodRequest } from "./bloodRequest.type";

const createBloodRequestInDB = async(payload:Partial<BloodRequest>) => {
    const result  =await BloodRequestModel.create(payload);
    return result;
}

export const BloodRequestService = {
    createBloodRequestInDB
};