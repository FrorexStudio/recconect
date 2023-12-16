import { body } from "express-validator";

export const registerValidation = [
    body("email", "Invalid email format").isEmail(),
    body("password", "Password must be at least 8 characters").isLength({ min: 8, max: 32 }),
];

export const authValidation = [
    body("email", "Invalid email format").isEmail(),
    body("password", "Password must be at least 8 characters").isLength({ min: 8 }),
];