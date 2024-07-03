require("dotenv").config();

const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgres://avnadmin:AVNS_swf4UOvWo9x8sPVPIrg@pg-f7a2a44-hardikpatan2324-a09c.l.aivencloud.com:27885/defaultdb?sslmode=require`;

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false
});

const users = [];

module.exports = { users, pool };
