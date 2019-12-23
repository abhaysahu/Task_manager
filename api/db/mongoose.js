//this file take mongodb database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/taskManager',{ useNewUrlParser: true}).then(() =>{
    console.log("connected to MongoDb successfully")
}).catch((e) =>{
    console.log("Error while alt empting to connect to MongoDB");
    console.log(e);
})

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};
