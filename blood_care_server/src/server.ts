import mongoose from "mongoose";
import app from "./app";
import { config } from "./config";

const main = async () => {
    try {
        await mongoose.connect(config.db_url as string)
    } catch (error) {
        console.error("Failed to connect to the database", error);
        process.exit(1);
    }
}

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
})

main()