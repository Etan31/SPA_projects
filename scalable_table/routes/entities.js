import express from "express";
import pool from "../db.js";
import { createEntity, getEntities } from "../services/createEntity.js";

const router = express.Router();

// GET all entities
router.get("/", async (req, res) => {
  try {
    const entities = await getEntities();
    res.json(entities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch entities" });
  }
});

// POST create entity
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const entity = await createEntity({ name });
    res.json(entity);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create entity" });
  }
});

router.get("/full", async (req, res) => {
  try {
    const { rows } = await pool.query(`
      select 
      e.id,
      e.name,
      e.created_at,
      coalesce(jsonb_object_agg(a.name, v.value) FILTER (where a.id IS NOT NULL), '{}'::JSONB) as attributes
      from entities e
      left join values v on v.entity_id = e.id
      left join attributes a on a.id = v.attribute_id
      group by e.id
      order by e.id
    `);

    // Optional: merge attributes JSON into main object
    const table = rows.map((r) => ({
      id: r.id,
      name: r.name,
      created_at: r.created_at,
      ...r.attributes,
    }));
    res.json(table);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch full table" });
  }
});

export default router;
