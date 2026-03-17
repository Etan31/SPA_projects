import pool from "../db.js";

export async function createEntity({ name }) {
  const { rows } = await pool.query(
    `INSERT INTO entities (name) VALUES ($1) RETURNING id, created_at`,
    [name]
  );
  return rows[0];
}

export async function getEntities() {
  const { rows } = await pool.query(
    `SELECT id, name, created_at FROM entities ORDER BY id`
  );
  return rows;
}
