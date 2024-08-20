const express = require('express');
const connectDB = require('./config/db');
const likeRoutes = require('./routes/likeRoutes');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/likes', likeRoutes);

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Like service running on port ${PORT}`);
});
