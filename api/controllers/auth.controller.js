import User from "../models/user.model.js";
import bcrypt from "bcryptjs";


export const signup = (req, res) => {
    res.json({
        message: "lmao"
    })
}

export const signupPost = async (req, res) => {
    // get request from frontend
    const { username, email, password } = req.body;
    
    
    // hash password

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    
    // create new user
    const newUser = new User({
        username,
        email,
        password: hash
    });

    // save user to database
    try {
        await newUser.save();
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            code: "error",
            message: error.message
        })
    }

    res.status(201).json({
        message: "success",
        code: "success"
    })
}
