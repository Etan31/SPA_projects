import pool from "../db.js";

export async function setValue({ entity_id, attribute_id, value }) {
  const { rows } = await pool.query(
    `INSERT INTO values (entity_id, attribute_id, value) VALUES ($1, $2, $3) RETURNING *`,
    [entity_id, attribute_id, value]
  );
  return rows[0];
}
