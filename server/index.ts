import express from 'express';
import axios from 'axios';
import https from 'https';

//import routes
import { getSettings } from './routes/getSettings';
import { getBuilds } from './routes/getBuilds';
import { getCurrentBuild } from './routes/getCurrentBuild';
import { getCurrentBuildLog } from './routes/getCurrentBuildLog';
import { postSettings } from './routes/postSettings';
import { postBuild } from './routes/postBuild';

const app = express();

const port = 3050;
const token = 'zzzz';
const baseURL = 'https://hw.shri.yandex/';

const agent = new https.Agent({ rejectUnauthorized: false });
const axiosInstance = axios.create({ httpsAgent: agent });

getSettings(app, axiosInstance, baseURL, token);

getBuilds(app, axiosInstance, baseURL, token);

getCurrentBuild(app, axiosInstance, baseURL, token);

getCurrentBuildLog(app, axiosInstance, baseURL, token);

postSettings(app, axiosInstance, baseURL, token);

postBuild(app, axiosInstance, baseURL, token);

app.listen(port, function() {
    console.log(`Server is on the port ${port}`);
});
