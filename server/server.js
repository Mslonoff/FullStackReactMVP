import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL } = process.env;

const client = new pg.Client({
  connectionString: DATABASE_URL,
});

await client.connect();

const app = express();

app.use(express.json());

app.get("/api/tasks", (req, res) => {
  client.query("SELECT * FROM tasks").then((result) => {
    res.send(result.rows);
  });
});
// ***************** routes that wil be needed ************

// post request for a user to create a userGarage for themself - they'll need to supply their firstName and lastName
// they will start with no vehicles in their garage



// post request to add a user's created vehicle to the userGarage table

// delete request to delete a user's created vehicle from the userGarage table

// post request to add a user's created vehicle to their garage,
// should post vehicle to userGarage by using the vehicle id number,
// (i.e. INSERT INTO user's userGarage vehicle_id ___) 
// 

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
