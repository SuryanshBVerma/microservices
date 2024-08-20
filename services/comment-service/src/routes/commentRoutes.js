const express = require('express');
const {
  createComment,
  getComment,
  updateComment,
  deleteComment,
  getPostComments
} = require('../controllers/commentController');
const router = express.Router();

router.post('/', createComment);
router.get('/:id', getComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);
router.get('/post/:postId', getPostComments);

module.exports = router;
