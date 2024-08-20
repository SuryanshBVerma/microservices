const express = require('express');
const { 
  userServiceProxy,
  postServiceProxy,
  commentServiceProxy,
  likeServiceProxy,
  notificationServiceProxy,
  followServiceProxy,
  mediaServiceProxy,

} = require('../config/proxy');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Apply proxy middleware
app.use('/users', userServiceProxy);
app.use('/posts', postServiceProxy);
app.use('/comments', commentServiceProxy);
app.use('/likes', likeServiceProxy);
app.use('/notifications', notificationServiceProxy);
app.use('/follows', followServiceProxy);
app.use('/media', mediaServiceProxy);

app.listen(PORT, () => {
  console.log(`Gateway service running on port ${PORT}`);
});
