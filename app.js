const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const siteInfo = require('./config/siteInfo');

const app = express();

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')))

// Routes

app.get('/', (req, res) => {
    const data = {
        siteInfo,
        title: 'Imon'
    };
    res.render('index', data);
});

app.get('/login', (req, res) => {
    const data = {
        siteInfo,
        title: 'Login'
    };
    res.render('login', data);
});

app.get('/signup', (req, res) => {
    const data = {
        siteInfo,
        title: 'Signup'
    };
    res.render('signup', data);
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
