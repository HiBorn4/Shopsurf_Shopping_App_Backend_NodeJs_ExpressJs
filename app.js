const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const expressHbs = require('express-handlebars'); // Use 'express-handlebars' instead of 'handlebars'


const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

const app = express();

// app.engine('express-handlers', expressHbs())
// app.set('view engine', 'express-handlebars');
app.set('view engine', 'ejs');
// app.set('view engine', 'pug');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);


app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page Not Found!'});
})

// const server = http.createServer(app);
// server.listen(3000);
// ---- ALTERNATIVE ----
app.listen(12345);