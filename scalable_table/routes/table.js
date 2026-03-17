import express from "express";
import pool from "./../db.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query(`
            SELECT 
            e.id as entity_id, 
            e.name as entity_name,
            COALESCE(
                jsonb_object_agg(a.name, v.value) 
                FILTER (WHERE a.name IS NOT NULL),
                '{}'::jsonb
            ) as attributes
            FROM entities e
            LEFT JOIN values v ON v.entity_id = e.id
            LEFT JOIN attributes a ON a.id = v.attribute_id
            GROUP BY e.id, e.name
            ORDER BY e.id;
            `);
    const columnSet = new Set(["entity_id", "entity_name"]);

    rows.forEach((row) => {
      const attributes = row.attributes || {};
      Object.keys(attributes).forEach((attr) => columnSet.add(attr));
    });

    const columns = Array.from(columnSet);

    const finalRows = rows.map((row) => {
      const base = {
        entity_id: row.entity_id,
        entity_name: row.entity_name,
      };

      const attributes = row.attributes || {};
      columns.forEach((col) => {
        if (col !== "entity_id && entity_name") {
          base[col] = attributes[col] || null;
        }
      });
      return base;
    });

    res.json({ columns, row: finalRows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create dynamic table" });
  }
});

export default router;
