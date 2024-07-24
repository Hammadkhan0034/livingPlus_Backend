// middleware/uploadHandler.js

const multer = require("multer");
const path = require("path"); // Import the path module

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the directory where files will be uploaded
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate unique filename
  },
});

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("profile_image"); // 'profile_image' should match the name attribute of your file input in the frontend

// Check file type
function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check MIME type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images only (jpeg/jpg/png)");
  }
}

module.exports = upload;




// const multer = require("multer");
// const path = require("path");

// // Set storage engine
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Specify the directory where files will be uploaded
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname); // Generate unique filename
//   },
// });

// // Check file type
// function checkFileType(file, cb) {
//   // Allowed extensions
//   const filetypes = /jpeg|jpg|png/;
//   // Check extension
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // Check MIME type
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb("Error: Images only (jpeg/jpg/png)");
//   }
// }

// // Init upload with dynamic field name
// const upload = (fieldName) => {
//   return multer({
//     storage: storage,
//     limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
//     fileFilter: function (req, file, cb) {
//       checkFileType(file, cb);
//     },
//   }).single(fieldName); // Use dynamic field name
// };

// module.exports = upload;

