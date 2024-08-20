const express = require('express');
const connectDB = require('./config/db');
const commentRoutes = require('./routes/commentRoutes');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/comments', commentRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Comment service running on port ${PORT}`);
});
