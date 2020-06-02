import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import swaggerDocs from './swagger.json';

import router from './components/routes';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('combined'));

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', router);
