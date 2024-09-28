// Import express
import express from 'express';
import './config/dotenv.js';
import tipsRouter from './routes/tips.js';

// Initialize the Express app
const app = express();

// Serve static files( images, HTML pages and JavaScript files) from the 'public' directory
// Middleware function to serve static files
// Middleware is SW that different applications use to communicate with each other
app.use('/public', express.static('./public'));

// Serve static files from the 'client\public\scripts' directory
app.use('/scripts', express.static('./public/scripts'));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">IdeasPath API</h1>');
});

// Use the tips router for the /tips endpoint
//Add the /tips endpoint to the app
app.use('/tips', tipsRouter);

// Start the server on port 3001 or the port defined in the environment variable
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});

// To run the server, in the terminal  navigates to the server directory then run the command npm start.