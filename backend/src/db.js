import pkg from "pg";
const { Pool } = pkg;

// Create a new Pool instance
const pool = new Pool({
  user: "postgres",
  host: "viaduct.proxy.rlwy.net",
  database: "rotulai",
  password: "",
  port: 50820,
});

export default pool;
