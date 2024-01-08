// app.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();
const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/users', async (req, res) => {
  try{
  const users = await prisma.user.findMany();
  res.json(users);
  } catch (error){
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Erro');
  }
});

app.post('/user', async (req, res) => {
  const { name, lastname } = req.body;
  const newUser = await prisma.user.create({
    data: {
      name,
      lastname,
    },
  });
  res.json(newUser);
});

app.get('/location', async (req, res)=>{
  try{
    const location = await prisma.gps.findMany();
    res.json(location)
  }catch(error){
    console.error('error', error);
    res.status(500).send('error garra');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});