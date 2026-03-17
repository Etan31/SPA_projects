import express from "express";
import { createAttribute } from "../services/createAttribute.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, data_type } = req.body;
    const attribute = await createAttribute({ name, data_type });
    res.json(attribute);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create attribute" });
  }
});

export default router;
