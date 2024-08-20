const express = require('express');
const connectDB = require('./config/db');
const followRoutes = require('./routes/followRoutes');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/follows', followRoutes);

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Follow service running on port ${PORT}`);
});
