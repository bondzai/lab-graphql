import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import itemRoutes from './src/routes/item.routes';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Use your routes
app.use('/api', itemRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
