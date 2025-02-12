import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    cite: String,
    language: String,
    isManager: Boolean
});

export const Employee = mongoose.model("Employee", employeeSchema)