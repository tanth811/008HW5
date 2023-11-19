module.exports = (app) => {
    const file_controller = require("../controllers/file.controllers");
    var router = require("express").Router();
    router.post("/upload",file_controller.uploadController);
    // console.log("File routes")
    router.get("/:name" , file_controller.displayAvatar);
    // console.log("File routes download")

    app.use("/api/file",router);
};
