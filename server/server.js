import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL } = process.env;

// const client = new pg.Client({ // this is for a deployed server
//   connectionString: DATABASE_URL,
// });

const { Pool } = pg;
const expressPort = 8005;

const client  = new Pool({ // this is for local host
  user: 'matthewslonoff',
  password: 'slonoff4',
  host: 'localhost',
  database: 'vehicleGarage',
  port: 5432,
});

await client.connect();

const app = express();

app.use(express.json());
// get all vehicles in vehicles table
app.get("/api/vehicles", (req, res) => {
  client.query("SELECT * FROM vehicles").then((result) => {
    res.send(result.rows);
  });
});
// ***************** routes that wil be needed ************
 

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`); // to listen on deplyed server
// });

app.listen(expressPort, () => {
  console.log(`Listening on port ${expressPort}`); // to listen on local host
});
