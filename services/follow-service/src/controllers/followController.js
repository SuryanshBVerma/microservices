const Follow = require('../models/followModel');

exports.followUser = async (req, res) => {
  const { followerId, followingId } = req.body;

  try {
    const existingFollow = await Follow.findOne({ followerId, followingId });
    if (existingFollow) {
      return res.status(400).json({ message: 'Already following' });
    }

    const newFollow = new Follow({ followerId, followingId });
    await newFollow.save();
    res.status(201).json(newFollow);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.unfollowUser = async (req, res) => {
  const { followerId, followingId } = req.body;

  try {
    const follow = await Follow.findOneAndDelete({ followerId, followingId });
    if (!follow) {
      return res.status(404).json({ message: 'Follow not found' });
    }
    res.json({ message: 'Unfollowed successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getFollowers = async (req, res) => {
  try {
    const followers = await Follow.find({ followingId: req.params.userId }).populate('followerId', 'username');
    res.json(followers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getFollowings = async (req, res) => {
  try {
    const followings = await Follow.find({ followerId: req.params.userId }).populate('followingId', 'username');
    res.json(followings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
