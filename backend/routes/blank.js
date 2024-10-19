import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blank = express.Router()

// Routes handling
blank.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../static', 'index.html'));
});

export default blank
