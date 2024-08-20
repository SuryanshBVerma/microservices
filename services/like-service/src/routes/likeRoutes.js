const express = require('express');
const {
  like,
  unlike,
  getLikesForPost,
  getLikesForComment
} = require('../controllers/likeController');
const router = express.Router();

router.post('/', like);
router.delete('/', unlike);
router.get('/post/:postId', getLikesForPost);
router.get('/comment/:commentId', getLikesForComment);

module.exports = router;
