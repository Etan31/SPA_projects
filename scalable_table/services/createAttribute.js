import pool from "../db.js";

export async function createAttribute({ name, data_type }) {
  const { rows } = await pool.query(
    `INSERT INTO attributes (name, data_type) VALUES ($1, $2) RETURNING *`,
    [name, data_type]
  );
  return rows[0];
}
