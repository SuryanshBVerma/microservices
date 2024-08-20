const express = require('express');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Post service running on port ${PORT}`);
});
