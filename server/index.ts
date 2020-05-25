import express from 'express';
import axios from 'axios';
import https from 'https';

//import routes
import { getSettings, postSettings } from './routes/getSettings';
import {
    getBuilds,
    getCurrentBuild,
    getCurrentBuildLog,
    postBuild,
} from './routes/getBuilds';

const app = express();

const port = 3050;
const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5MTgxNDczIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImtraXJpayIsInVybjpnaXRodWI6bmFtZSI6IktpcmlsbCBLaGFyaXRvbm92IiwidXJuOmdpdGh1Yjp1cmwiOiJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2traXJpayIsIm5iZiI6MTU4OTk1ODIzNiwiZXhwIjoxNTkyNTUwMjM2LCJpc3MiOiJTaHJpLUhvbWV3b3JrIiwiYXVkIjoiU2hyaS1Ib21ld29yayJ9.B1KA4PyJyGfxcCwsnoxgyUAibwmiFSGoniFM6YpnJX8';
const baseURL = 'https://hw.shri.yandex/';

const agent = new https.Agent({ rejectUnauthorized: false });
const axiosInstance = axios.create({
    httpsAgent: agent,
    headers: { Authorization: `Bearer ${token}` },
});

getSettings(app, axiosInstance, baseURL, token);

getBuilds(app, axiosInstance, baseURL, token);

getCurrentBuild(app, axiosInstance, baseURL, token);

getCurrentBuildLog(app, axiosInstance, baseURL, token);

postSettings(app, axiosInstance, baseURL, token);

postBuild(app, axiosInstance, baseURL, token);

app.listen(port, function() {
    console.log(`Server is on the port ${port}`);
});
