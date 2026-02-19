import dotenv from "dotenv";

dotenv.config({ path: "./.env" });



// 1️⃣ Node sees import cloudinary.js
// 2️⃣ cloudinary.js runs immediately
// 3️⃣ cloudinary.config() executes
// 4️⃣ process.env.CLOUD_API_KEY is undefined ❌
// 5️⃣ Error: Must supply api_key
// 6️⃣ After that dotenv.config() runs (too late)
//  because of this we create this file


// correct flow

// 1️⃣ Node loads envConfig.js first
// 2️⃣ dotenv.config() runs
// 3️⃣ process.env gets populated
// 4️⃣ Then cloudinary.js loads
// 5️⃣ cloudinary.config() reads correct values ✅
// 6️⃣ App runs successfully
