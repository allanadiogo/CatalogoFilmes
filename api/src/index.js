import 'dotenv/config'

import usuarioController from './controller/usuarioController.js';
import filmeController from './controller/filmeController.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());
server.listen(process.env.PORT, () => console.log(`API esta online na porta ${process.env.PORT}`));

// configuracao dos endpoits
server.use(usuarioController);
server.use(filmeController);