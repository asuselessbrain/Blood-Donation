export interface BloodRequestUser {
  name: string;
  email: string;
  image?: string;
}

export interface BloodRequest {
    patientName: string;
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    unitsNeeded: number;
    hospitalName: string;
    location: string;
    requiredDate: Date;
    contactNumber: string;
    additionalNotes?: string;
    createdBy: BloodRequestUser;
}
