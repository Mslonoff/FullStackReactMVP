import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL } = process.env;

// const client = new pg.Client({ // this is for a deployed server
//   connectionString: DATABASE_URL,
// });
// await client.connect();

const { Pool } = pg;
const app = express();
// const expressPort = process.env.PORT;
app.use(express.json());

const client  = new Pool({ // this is for local host
  user: 'matthewslonoff',
  password: 'slonoff4',
  host: 'localhost',
  database: 'vehicleGarage',
  port: 5432,
});

// get all vehicles in vehicles table
app.get("/api/vehicles", (req, res) => { // good to go
  client.query("SELECT * FROM vehicles").then((result) => {
    console.log('hi there tasks executed');
    res.send(result.rows);
  });
});

// get vehicle by index
app.get('/api/vehicles/:id', (req, res) => { // good to go
  const { id } = req.params;
  client.query('SELECT * FROM vehicles WHERE id=$1', [id])
  .then((result) => {
    if (result.rows.length > 0) {
      res.send(result.rows)
    } else {
      res.status(404).send('Sorry cannot find vehicle');
    }
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send('Internal Server Error');
  });
});

// build a post route

// ***************** routes that wil be needed ************
 

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`); // to listen on deplyed server
// });

app.listen(8005, () => {
  console.log(`Listening on port ${8005}`); // to listen on local host
});
