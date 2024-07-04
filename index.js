import express from "express";
import http from 'http';
import dotenv from 'dotenv';

//IMPORT ROUTES
import nav_routes from './routes/nav.routes.js';
import form_routes from './routes/form.routes.js'

//CONFIGURE ENVIRONMENT VARIABLES
dotenv.config();

// INITIALIZE EXPRESS SERVER INSTANCE
const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3030;

//SOME BASIC MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'hbs');

//ROUTES
app.use('/',nav_routes);
app.use('/', form_routes)

//START THE SERVER
server.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
});