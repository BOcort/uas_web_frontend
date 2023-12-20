// import express from 'express';
// import mysql from 'mysql';

// const app = express();
// const port = 3001;

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//     } else {
//         console.log('Connected to MySQL');
//     }
// });

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'uas_web',
// });

// // Connect to MySQL
// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//     } else {
//         console.log('Connected to MySQL');
//     }
// });

// app.get('/api/books', (req, res) => {
//     const sql = 'SELECT * FROM Books';

//     db.query(sql, (err, result) => {
//         if (err) {
//             console.error('Error executing query:', err);
//             res.status(500).send('Internal Server Error');
//         } else {
//             res.json(result);
//         }
//     });
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });