const { createProxyMiddleware } = require('http-proxy-middleware');

const userServiceProxy = createProxyMiddleware({
  target: 'http://localhost:5001',  // URL of the User Service
  changeOrigin: true,
  pathRewrite: {
    '^/users': '/users',  // Rewrite URL if needed
  },
});

const postServiceProxy = createProxyMiddleware({
  target: 'http://localhost:5002',  // URL of the Post Service
  changeOrigin: true,
  pathRewrite: {
    '^/posts': '/posts',  // Rewrite URL if needed
  },
});

const commentServiceProxy = createProxyMiddleware({
  target: 'http://localhost:5003',  // URL of the Comment Service
  changeOrigin: true,
  pathRewrite: {
    '^/comments': '/comments',  // Rewrite URL if needed
  },
});

const likeServiceProxy = createProxyMiddleware({
  target: 'http://localhost:5004',  // URL of the Like Service
  changeOrigin: true,
  pathRewrite: {
    '^/likes': '/likes',  // Rewrite URL if needed
  },
});

const notificationServiceProxy = createProxyMiddleware({
  target: 'http://localhost:5005',  // URL of the Notification Service
  changeOrigin: true,
  pathRewrite: {
    '^/notifications': '/notifications',  // Rewrite URL if needed
  },
});

const followServiceProxy = createProxyMiddleware({
  target: 'http://localhost:5006',  // URL of the Follow Service
  changeOrigin: true,
  pathRewrite: {
    '^/follows': '/follows',  // Rewrite URL if needed
  },
});

const mediaServiceProxy = createProxyMiddleware({
  target: 'http://localhost:5007',  // URL of the Media Service
  changeOrigin: true,
  pathRewrite: {
    '^/media': '/media',  // Rewrite URL if needed
  },
});

const searchServiceProxy = createProxyMiddleware({
  target: 'http://localhost:5008',  // URL of the Search Service
  changeOrigin: true,
  pathRewrite: {
    '^/search': '/search',  // Rewrite URL if needed
  },
});

module.exports = {
  userServiceProxy,
  postServiceProxy,
  commentServiceProxy,
  likeServiceProxy,
  notificationServiceProxy,
  followServiceProxy,
  mediaServiceProxy,
};
