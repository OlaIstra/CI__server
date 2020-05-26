import express from 'express';

import buildRouter from './routes/buildRouter';
import settingsRouter from './routes/settingsRouter';

const app = express();

const port = 3050;

app.use('/api/settings', settingsRouter);
app.use('/api/builds', buildRouter);

app.listen(port, function() {
    console.log(`Server is on the port ${port}`);
});
