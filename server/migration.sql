-- DROP TABLE IF EXISTS userGarage;
DROP TABLE IF EXISTS vehicles;

-- CREATE TABLE userGarage (
--   id serial PRIMARY KEY,
--   firstName varchar(20),
--   lastName varchar(30),
--   vehicle_id integer, -- NOT SURE HOW TO IMPLEMENT THIS ONE YET
--   FOREIGN KEY (vehicle_id) REFERENCES vehicles (id) ON DELETE CASCADE
-- );

CREATE TABLE vehicles (
  id serial PRIMARY KEY,
  make varchar(20),
  model varchar(20),
  trim varchar(20),
  color varchar(20),
  year integer
);

