const multer = require("multer")
const util = require("util")
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, __basedir+ "/assets/");
    },
    filename: (req, file, cb)=>{
        const extArray = file.mimetype.split("/");
        const extension = extArray[extArray.length-1];
        const newFilename = "FileUpload-"+Date.now()+"."+extension;
        cb(null, newFilename);
    }
});
// console.log("Middleware");
const uploadFile = multer({storage: storage}).single("singlefile");
//promisify => asyn-await
const uploadMiddleware = util.promisify(uploadFile);
module.exports = uploadMiddleware;