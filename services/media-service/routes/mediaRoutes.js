const express = require('express');
const multer = require('multer');
const path = require('path');
const mediaController = require('../controllers/mediaController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('media'), mediaController.uploadMedia);
router.get('/:id', mediaController.getMedia);
router.delete('/:id', mediaController.deleteMedia);

module.exports = router;
