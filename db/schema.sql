-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers" database --
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE table burgers(
    id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR( 255) NOT NULL,
	devoured BOOLEAN default false,
	/* Set ID as primary key */
	PRIMARY KEY ( id )
);
