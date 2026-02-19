//import cloudinary from "../config/cloudinary.js";
 import multer from 'multer'



 const storage=multer.memoryStorage();

 const upload=multer({storage,})

export default upload


// onst result = await cloudinary.uploader.upload(
//       `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,