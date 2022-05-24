const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const secret = "Paulo22122002"

module.exports = {
    dest: path.resolve(__dirname, '..','..','uploads','images'),
    storage: multer.diskStorage({
        destination: (req,file,cb) => {
            cb(null, path.resolve(__dirname, '..','..','uploads','images'))
        },
        filename: (req,file,cb) => {
            crypto.randomBytes(16,(err,hash) => {
                if (err) cb(err);

                const name_md5  = crypto.createHmac("md5", secret);
                const hashName = name_md5.update(secret).digest("hex");

                const filename = `${hashName}-${file.originalname}`;

                
                console.log(filename);
                cb(null,filename);
            });
        }
    }),
    limits: {
        fileSize: 4 * 1024 * 1024,
    },
    fileFilter: (req,file,cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/png',
            'image/gif'
        ]

        if (allowedMimes.includes(file.mimetype)) {
            cb(null,true)
        }else{
            cb(new Error('Invalid file type'))
        }
    },
};