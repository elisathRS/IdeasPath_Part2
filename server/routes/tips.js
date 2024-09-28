// server/routes/tips.js
import express from 'express'; // Framework web to Node.JS that allows create routs, handle request HTTP and build web services 
import path from 'path';       // Help to handle file routes and directories
import { fileURLToPath } from 'url';
//import tipData from '../data/tips.js';
import TipsController from '../controllers/tips.js'

// Convert the module URL to a file path and get the directory name
const __filename = fileURLToPath(import.meta.url);  // converts a file URL to a file path.import.meta.url provides the url of the file that is executing in the current module.  Ex: file:///C:/projects/myApp/routes/tips.js and converts it to a valid route for the OS Window. Ex: C:/projects/myApp/routes/tips.js
const __dirname = path.dirname(__filename); //Get the directory where the file is located
//Ex: if __filename is C:/projects/myApp/routes/tips.js the dirname will be: C:/projects/myApp/routes

// Create an Express router
const router = express.Router();

// Route to return tip data as JSON
//Create a GET route at the / endpoint that responds with status 200 and sends a JSON of the tipData
router.get('/', TipsController.getTips)


// Route to serve a tip-specific HTML file
//Create a GET route at the /:tipId endpoint that respons with status 200 and sends the tip.html file
router.get('/:tipId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/tip.html'));
});

// Export the router
export default router;


//The idea of this code is to create route that handles http request that are related with tips. When an user accesses to /tips
// or /tip/:id the server can return the right info