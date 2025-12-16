// get user fdata using user id

import User from "../models/user";
import { upload } from "../configs/multer.js";
import path from "path";
import fs from "fs";
import ImageKit from "imagekit";
import imagekit from "../configs/imagekit.js";  

export const getUserData = async (req, res) => {
    try {
        const {userId} = await req.auth();
        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({message: 'User not found'});
        }
        res.json(user);
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'});
    }
}
// UpdateUser data

export const updateUserData = async (req, res) => {
    try {
        const {userId} = await req.auth();
        const {username, bio, locatio, full_name} = req.body;
        const temoUser = await User.findById(userId)
        !username && (username = temoUser.username);
        if(temoUser.username !== username) {
            const user = await User.findOne({username});
            if(user) {
                return res.status(400).json({message: 'Username already taken'});
        }
    }
        const updatedUser = {
            username,
            bio,
            locatio,
            full_name
        }
        const profile  = req.files.profile && req.files.profile[0];
        const cover  = req.files.cover && req.files.cover[0];
        
        if(profile) {
            const buffer = fs.readFileSync(profile.path);
            const response = await imagekit.upload({
                file : buffer,
                fileName : profile.originalname,    
        });
           const url = imagekit.url({
                path : response.filePath,
                transformation: [
                    {quality : 'auto'},
                    {format: 'webp'},
                    {width: '512'}
                ]
           });
              updatedUser.profile_picture = url;
        }
        if(cover) {
            const buffer = fs.readFileSync(cover.path);
            const response = await imagekit.upload({
                file : buffer,
                fileName : cover.originalname,    
        });
           const url = imagekit.url({
                path : response.filePath,
                transformation: [
                    {quality : 'auto'},
                    {format: 'webp'},
                    {width: '1280'}
                ]
           });
              updatedUser.cover_photo = url;
        }
        const user = await User.findOneAndUpdate(userId, updatedUser, {new: true});
        res.json({success: true,user, message: 'User updated successfully'});
    }
      catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Server Error'});
    }
}
export const followUser = async (req, res) => {
    try {
        const {userId} = await req.auth();
        const {id} = req.body;
        const user = await User.findById(id);
        if(user.following.includes(id)) {
            return res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'});
    }
}



