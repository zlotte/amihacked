const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet')
const app = express();

const port = process.env.PORT || 3000;

app.use(helmet());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})