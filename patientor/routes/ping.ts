import express from "express";
const router = express.Router();

router.get("/", (_req, res) => {
  console.log("routing");
  res.send("pong");
});

export default router;
