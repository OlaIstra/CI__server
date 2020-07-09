import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import swaggerDocs from './swagger.json';
import router from './components/routes';

require('dotenv').config();

const port = process.env.PORT;
//const port = 4000;

export async function bootstrap(): Promise<void> {
    const app = await express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(morgan('combined'));

    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    app.use('/api', router);

    await app.listen(port, function() {
        console.log(`Server is on the port ${port}`);
    });
}
