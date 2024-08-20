const express = require('express');
const connectDB = require('./config/db');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/notifications', notificationRoutes);

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
  console.log(`Notification service running on port ${PORT}`);
});
