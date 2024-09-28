// Import the necessary modules
import { pool } from './database.js';
import './dotenv.js';
import giftData from '../data/tips.js';

// Asynchronous function to create the gifts table
const createTipsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS tips;

        CREATE TABLE IF NOT EXISTS tips (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            text VARCHAR(255) NOT NULL,
            category VARCHAR(50) NOT NULL,
            image VARCHAR(255) NOT NULL,
            submittedBy VARCHAR(255) NOT NULL,
            submittedOn TIMESTAMP NOT NULL
        )
    `;

    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 tips table created successfully');
    } catch (err) {
        console.error('⚠️ error creating tips table', err);
    }
};

// Asynchronous function to seed data into the gifts table
const seedTipsTable = async () => {
    // Wait for the table to be created
    await createTipsTable();

    // Traverse giftData and insert each gift into the table
    giftData.forEach((tip) => {
        const insertQuery = {
            text: 'INSERT INTO tips (title, text, category, image, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6)'
        };

        const values = [
            tip.title,
            tip.text,
            tip.category,
            tip.image,
            tip.submittedBy,
            tip.submittedOn
        ];

        // Query the database to insert the gift
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting tip', err);
                return;
            }

            console.log(`✅ ${tip.title} added successfully`);
        });
    });
};

// Call the seedTipsTable function to start the process
seedTipsTable();
