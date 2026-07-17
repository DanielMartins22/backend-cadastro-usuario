// Antigo

// cont express = require("express")

// Novo

import express, { request, response } from 'express';
import cors from 'cors';
import { PrismaClient } from './generated/prisma/client.js';

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get('/usuarios', async (request, response) => {
    const { gender } = request.query

    const users = await prisma.user.findMany({
        where: gender ? { gender } : {}
    });

    response.status(200).json(users);
});

app.post('/usuarios', async (request, response) => {
    try {
        const user = await prisma.user.create ({
            data: {
                email: request.body.email,
                age: request.body.age,
                name: request.body.name,
                gender: request.body.gender
            },
        });
        response.status(201).json(user);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
});

app.put('/usuarios/:id', async (request, response) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: request.params.id,
            },
            data: {
                email: request.body.email,
                age: request.body.age,
                name: request.body.name,
                gender: request.body.gender
            },
        });

        response.status(200).json(user);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }

    1;
});

app.delete('/usuarios/:id', async (request, response) => {
    try {
        await prisma.user.delete({
            where: {
                id: request.params.id,
            },
        });
        response.status(200).json({ message: 'Usuario deletado com sucesso!' });
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
});

app.listen(3000);

// request/rq = requisiçao
// response/re = resposta

// http://localhost:3000/usuarios

/* 

danielmncontato
82mB9pQ#
*/
