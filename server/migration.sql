-- DROP TABLE IF EXISTS userGarage;
DROP TABLE IF EXISTS vehicles;

CREATE TABLE vehicles (
  id serial PRIMARY KEY,
  make varchar(20),
  model varchar(20),
  trim varchar(20),
  color varchar(20),
  year integer
);

CREATE TABLE userGarage (
  id serial PRIMARY KEY,
  vehicle_id integer, -- NOT SURE HOW TO IMPLEMENT THIS ONE YET
  FOREIGN KEY (vehicle_id) REFERENCES vehicles (id) ON DELETE CASCADE
);
