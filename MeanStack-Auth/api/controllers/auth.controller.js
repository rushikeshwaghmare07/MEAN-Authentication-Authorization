import Role from "../models/Role.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { CreateError } from "../utils/error.js";
import { CreateSuccess } from "../utils/success.js";

export const register = async (req, res, next)=> {
    const role = await Role.find({role: 'User'});
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: hashPassword,
        roles: role
    });
    await newUser.save();
    return next(CreateSuccess(200, "User registered successfully!"));
}

export const login = async (req, res, next)=> {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user) {
            return next(CreateError(404, "User not found!"))
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) {
            return next(CreateError(400, "Password is incorrect!"));
        }
        return next(CreateSuccess(200, "Login success!"));
    } catch (error) {
        return next(CreateError(500, "Something went wrong!"));
    }
}