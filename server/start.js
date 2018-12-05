const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);

require('dotenv').config();

mongoose.connect(process.env.DB_NAME, () => {
    console.log(`Successfully connected to DB`);
});

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.log(`Error has occured ${err.message}`);
});

// import our models
require('./models/product');


const app = require('./app');
app.set('port', process.env.PORT || 4000);

const server = app.listen(app.get('port'), () => {
    console.log(`Listening on the port ${server.address().port}`);
});