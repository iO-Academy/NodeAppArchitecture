const express = require('express')
const router = require('./Config/routes')

const app = express()
const port = 3000

// enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

// call all routes
router(app)


app.listen(port, () => console.log('todo app running'))

