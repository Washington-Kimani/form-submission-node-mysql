import {pool} from "../configs/connectDb.js";

export const getAll = async ()=>{
    return await pool.query(`SELECT * FROM people`);
}

export const createNew = (name,email,choice)=>{
    return new Promise((resolve, reject)=>{
        pool.query(`INSERT INTO people (name,email,choice) VALUES (?,?,?)`,[name,email,choice], (err, result)=>{
            err ? reject(err) : resolve(result);
        });
    });
}

export const getOne = (id)=>{
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM people WHERE id = ?`, [id], (err, result)=>{
            err ? reject(err) : resolve(result);
        });
    });
}

export const deleteOne = async (id)=>{
    return await pool.query(`DELETE FROM people WHERE id = ?`,[id])
}