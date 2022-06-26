const multer = require('multer');
const util = require("util");

const storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        cb(null, './public/uploads/' + file.fieldname);
    },
    filename: async function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

function filePictureFilter (req, file, cb){
    if(!file.originalname.match(/.(jpg|jpeg|png|gif|svg)$/)){
        return cb(new Error("Le fichier n'est pas une image"), false);
    }
    cb(null, true);
}

let uploadImage = multer({ filePictureFilter, storage }).any();

let uploadImageMiddleware = util.promisify(uploadImage);

module.exports = {
    uploadImageMiddleware
};