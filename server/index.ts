import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

import router from './components/routes';

require('dotenv').config();

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('combined'));

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', router);

const port = process.env.PORT;

app.listen(port, function() {
    console.log(`Server is on the port ${port}`);
});
