import express from 'express';
import {createNew, deleteOne} from "../controllers/form.controllers.js";

const router = express.Router();

router.post('/submit', (req,res)=>{
    const {name,email,choice} = req.body;
    createNew(name,email,choice);
    res.redirect('/');
});

router.post('/delete/:id', async (req,res)=>{
    const {id} = req.params;
    await deleteOne(id);
    res.redirect('/people')
})


export default router;