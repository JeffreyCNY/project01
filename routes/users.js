import express from "express";
import { updateUser, deleteUser, getUser, getallUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/* //Check Authentication
router.get("/checkauthentication", verifyToken, (req,res,next) => {
    res.send("Hello user, you are logged in")
})
//Check user
router.get("/checkuser/:id", verifyUser , (req,res,next) => {
    res.send("Hello user, you are logged in and u can delete your account!")
})
//Check Admin
router.get("/checkadmin/:id", verifyAdmin , (req,res,next) => {
    res.send("Hello admin, you are logged in and u can delete all account!")
 */

//Update
router.put("/:id",verifyUser, updateUser)
//Delete
router.delete("/:id",verifyUser, deleteUser)
//Get
router.get("/:id",verifyUser, getUser)
//Get All
router.get("/",verifyAdmin, getallUser)


export default router