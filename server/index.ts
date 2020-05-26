import express from 'express';

import router from './routes';

require('dotenv').config();

export const app = express();

const port = process.env.PORT;

app.use('/api', router);

app.listen(port, function() {
    console.log(`Server is on the port ${process.env.PORT}`);
});
