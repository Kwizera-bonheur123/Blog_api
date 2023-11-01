import express from 'express';
import { Sequelize } from 'sequelize';
import app from './app';

const sequelize = new Sequelize('Blog', 'postgres', 'kwizera@123', {
  host: 'localhost',
  dialect: 'postgres',
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => console.log('Database connection has been established successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));


const PORT = process.env.PORT || 4100;

app.listen(PORT, () => {
  console.log(`Server running on PORT: http://localhost:${PORT}`);
});
