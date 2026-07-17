// Antigo

// cont express = require("express")

// Novo

import dotenv from 'dotenv';
import express, { request, response } from 'express';
import cors from 'cors';
import { PrismaClient } from './generated/prisma/client.js';

dotenv.config();

if (!process.env.DATABASE_URL) {
    console.error('Erro: variável de ambiente DATABASE_URL não definida. Configure-a antes de iniciar o servidor.');
    process.exit(1);
}

const app = express();
app.use(express.json());
app.use(cors());

let prisma;
try {
    prisma = new PrismaClient();
} catch (error) {
    console.error('Erro ao conectar ao banco de dados via Prisma:', error.message);
    process.exit(1);
}

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

