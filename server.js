const express = require('express');
const path = require('path');


const app = express();


app.use('/', require('./routes/contact'));
//using static folder
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is runing on port ${PORT}`));