import { Prisma, PrismaClient, users } from '@prisma/client';

import express, { Response, Request } from "express";

const prisma = new PrismaClient()

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.users.findMany();
    //writing RAW query
    // const allUsers = await prisma.$queryRaw(
    //   Prisma.sql`SELECT * FROM users`
    // )
    res.json(allUsers);
  } catch (error) {
    res.send(error);
  }
});


app.get('/users', async (req: Request, res: Response): Promise<void> => {
  try {
    const allUsers = await prisma.users.findMany();
    //writing RAW query
    // const allUsers = await prisma.$queryRaw(
    //   Prisma.sql`SELECT * FROM users`
    // )
    res.json(allUsers);
  } catch (error) {
    res.send(error);
  }
});

app.get('/users/:id', async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await prisma.users.findFirst({
      where: {
        id: Number(id),
      }
    });

    res.json(user);
  } catch (error) {
    res.send(error);
  }
});

app.post('/users', async (req: Request, res: Response): Promise<void> => {
  try {

    const result = await prisma.users.create({
      data: {
        ...req.body,
      },
    })
    res.json(result)

  } catch (error) {
    res.send(error);
  }
});

app.delete('/users/:id', async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await prisma.users.delete({
      where: {
        id: Number(id),
      }
    });

    res.json(user);
  } catch (error) {
    res.send(error);
  }
});

app.put('/users/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await prisma.users.update({
      where: {
        id: Number(id),
      },
      data: { ...req.body, },
    });

    res.json(user);
  } catch (error) {
    res.send(error);
  }
})


app.listen(PORT, (): void => {
  console.log(
    "Server is Successfully Running, and App is listening on port " + PORT
  );

});
