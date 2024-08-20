const express = require('express');
const {
  createPost,
  getPost,
  updatePost,
  deletePost,
  getUserPosts,
  getTimeline
} = require('../controllers/postController');
const router = express.Router();

router.post('/', createPost);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/user/:userId', getUserPosts);
router.get('/timeline', getTimeline);

module.exports = router;
