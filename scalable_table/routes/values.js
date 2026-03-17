import express from "express";
import { setValue } from "../services/setValues.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { entity_id, attribute_id, value } = req.body;
    const row = await setValue({ entity_id, attribute_id, value });
    res.json(row);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to set value" });
  }
});

export default router;
