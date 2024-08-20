const Like = require('../models/likeModel');

exports.like = async (req, res) => {
  const { postId, commentId, userId } = req.body;

  try {
    const existingLike = await Like.findOne({ postId, commentId, userId });
    if (existingLike) {
      return res.status(400).json({ message: 'Already liked' });
    }

    const newLike = new Like({ postId, commentId, userId });
    await newLike.save();
    res.status(201).json(newLike);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.unlike = async (req, res) => {
  const { postId, commentId, userId } = req.body;

  try {
    const like = await Like.findOneAndDelete({ postId, commentId, userId });
    if (!like) {
      return res.status(404).json({ message: 'Like not found' });
    }
    res.json({ message: 'Like removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getLikesForPost = async (req, res) => {
  try {
    const likes = await Like.find({ postId: req.params.postId }).populate('userId', 'username');
    res.json(likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getLikesForComment = async (req, res) => {
  try {
    const likes = await Like.find({ commentId: req.params.commentId }).populate('userId', 'username');
    res.json(likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
