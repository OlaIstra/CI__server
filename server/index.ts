import express from 'express';
import morgan from 'morgan';

import router from './components/routes';

require('dotenv').config();

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('combined'));

app.use('/api', router);

const port = process.env.PORT;

app.listen(port, function() {
    console.log(`Server is on the port ${port}`);
});
