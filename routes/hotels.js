import express from "express";
import {
  AllHotel,
  createHotel,
  deleteHotel,
  HotelData,
  updateHotel,
} from "../controllers/hotel.js";

const router = express.Router();

// create
router.post("/", createHotel);

// update
router.put("/:id", updateHotel);

//delete

router.delete("/:id", deleteHotel);

//get
router.get("/:id", HotelData);

//get all
router.get("/", AllHotel);
export default router;
