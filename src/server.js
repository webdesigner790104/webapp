const express = require('express');
const app = express();
const mongoose = require('mongoose');


const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected"))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)

app.listen(5000, () => console.log("Server is up and running"));