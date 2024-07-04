import express from "express";
import {getAll} from "../controllers/form.controllers.js";
// import flash from 'express-flash';

const router = express.Router();

router.get('/',(req, res)=>{
    res.render('home', {title:"Home", message: "Welcome to The Home Page", favicon: 'https://img.icons8.com/dusk/64/circled.png'});
});

router.get('/create', (req,res)=>{
    res.render('form', {title:'Create New', favicon: 'https://img.icons8.com/dusk/64/circled.png'});
});

router.get('/people', async (req,res)=>{
    const [people] = await getAll();
    // console.log(people);
   res.render('people', {title: 'The People', favicon: 'https://img.icons8.com/dusk/64/circled.png', people})
});

export default router;