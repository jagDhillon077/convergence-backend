import express from 'express';

import todoRouter from './routes/todo.js'
import credentialsRouter from './routes/credentials.js'

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send('Ok');
});



app.use(express.json());

app.use('/credentials', credentialsRouter)
app.use('/todo', todoRouter)



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



// Requirements:

// Use Node.js

// A User should be able to create "todo" items, which can be viewed (read) by all users.

// Only the owner of a todo item can update or delete a todo item

// A user can use the REST API to search to-do items by different filters. (e.g. description, category - up to you)

// A login endpoint with simple authentication logic

// Validation and error handling where it is considered appropriate

// Notes:

// The API does not actually need to be deployed or hosted; the code is sufficient

// It may be easiest to simply share a public GitHub repo URL

// The DB layer will be assumed to exist (it also does not need to be running)

// A "todo" entity can be whatever you want it to be. The back end can be as simple as you consider appropriate.

// Bonus:

// Use GraphQL

// Database connection/configuration setup (DB engine of choice - again, no hosted DB is expected to be provided)
