-- Create users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    telegram_id BIGINT UNIQUE NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255),
    username VARCHAR(255),
    wallet_address VARCHAR(255)
);

-- Create tasktype table
CREATE TABLE tasktype (
    id INT AUTO_INCREMENT PRIMARY KEY,
    typename VARCHAR(255) NOT NULL
);

-- Create tasks table
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tasktype INT,
    title VARCHAR(255) NOT NULL,
    desc TEXT,
    score INT,
    FOREIGN KEY (tasktype) REFERENCES tasktype(id) ON DELETE SET NULL
);

-- Create friends table
CREATE TABLE friends (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    frienduuid VARCHAR(255) NOT NULL
);

-- Create news table
CREATE TABLE news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    header VARCHAR(255),
    desc TEXT,
    link VARCHAR(255)
);

-- Create bonus table
CREATE TABLE bonus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    desc TEXT,
    enddate DATETIME,
    startdate DATETIME,
    link VARCHAR(255)
);