import { Sequelize } from 'sequelize';
import app from './app';

const db = new Sequelize(process.env.DbConnection);
const connectionToDatabase = async () => {
  try{
    await db.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:",error);
  }
}

connectionToDatabase();


const PORT = process.env.PORT || 4100;

app.listen(PORT, () => {
  console.log(`Server running on PORT: http://localhost:${PORT}`);
});
