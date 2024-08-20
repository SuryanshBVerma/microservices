const express = require('express');
const {
  followUser,
  unfollowUser,
  getFollowers,
  getFollowings
} = require('../controllers/followController');
const router = express.Router();

router.post('/', followUser);
router.delete('/', unfollowUser);
router.get('/followers/:userId', getFollowers);
router.get('/followings/:userId', getFollowings);

module.exports = router;
