import { app } from "./app.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 5000;
connectDB()
  .then(
    app.listen(PORT, () => {
      console.log("SERVER IS RUNNING AT PORT::", PORT);
    })
  )
  .catch((error) => {
    console.error("MONGODB CONNECTION FAILD !! ", error);
  });
