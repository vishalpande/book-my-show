const express = require("express");
const bodyParser = require("body-parser");
const bookMovieRouter = require('./router/bookMovieRouter')
const cors = require('cors')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use('/api/booking',bookMovieRouter)
// if other then  /api/booking will
app.use((req, res, next) => {
    return res.json({ message: 'page not found!'});
});





const port = 8080;
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;   