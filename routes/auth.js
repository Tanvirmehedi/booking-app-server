import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is auth end point");
});

export default router;
