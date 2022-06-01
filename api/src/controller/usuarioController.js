import { login } from '../repository/usuarioRepository.js'

import { Router } from 'express';
const server = Router();


server.post('/usuario/login', async (req, resp) =>{
    try {
        const { email, senha} = req.body;

       const response   = await login( email, senha);
       resp.send({})

    } catch (err){

    }
})