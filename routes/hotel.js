import express from "express";
import { createHotel, deleteHotel, getallHotel, getHotel, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

//Create
router.post("/",verifyAdmin, createHotel);
//Update
router.put("/:id",verifyAdmin, updateHotel)
//Delete
router.delete("/:id",verifyAdmin ,deleteHotel)
//Get
router.get("/:id",getHotel)
//Get All
router.get("/", getallHotel)

export default router