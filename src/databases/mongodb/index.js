const mongoose = require('mongoose');

// const mongoUri = "mongodb+srv://chatapp:chatappghana@chatapp.76k6l.mongodb.net/chatapp?retryWrites=true&w=majority";
const mongoUri = process.env.MONGODB_URI;
const mongoUriLocal = 'mongodb://localhost:27017/nutring';

module.exports = {
    
    async connect(){
        try {
            await mongoose.connect(mongoUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            })
            console.log("Connected to MongoDB");
        } catch (e){
            console.error("Authentication failed for MongoDB");
        }
    }

}
