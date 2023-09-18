import mongoose from 'mongoose';

// Load environment variables from a .env file or another source
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not defined');
}

// todo fix it
// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

const connection = mongoose.connection;

connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});
