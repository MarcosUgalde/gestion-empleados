DROP TABLE IF EXISTS users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    edit_access TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS employees (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL UNIQUE,
    department TEXT NOT NULL,
    shift TEXT,
    contract_type TEXT
);

CREATE TABLE IF NOT EXISTS departments (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE
);