const multer = require("multer")
const fs = require("fs")
const path = require("path")
const ApiError = require("../Middlewares/apiError")


try {
    fs.mkdirSync(path.join(__dirname, "../images/"))
} catch (err) {
    if (err.code !== "EEXIST")
        throw err
}

try {
    fs.mkdirSync(path.join(__dirname, "../images/products"))
} catch (err) {
    if (err.code !== "EEXIST")
        throw err
}

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../images/products/"),
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    },
    limits: {
        fileSize: 1024 * 5
    }
})

const upload = multer({
    storage: storage,
    fileFilter: async function (req, file, cb) {

        var fileSizeInBytes = file.size;
        var fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

        if (fileSizeInMegabytes > 5) {
            console.log("The photo may not be greater than 5 Mbytes.")
            throw new ApiError(422, "!Image size exception!", {photo: ["!Photo has not to be greater than 5Mbs!"]})
        }


        cb(null, true)
    }
}).single("photo")

module.exports = upload