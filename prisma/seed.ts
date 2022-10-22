import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function seed() {
  const email = 'test@mail.com'

  // clean up the existing database
  await prisma.user.delete({where: {email}}).catch(() => {
    // all goods
  })

  const hashedPassword = await bcrypt.hash('password', 10)

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  })

  await prisma.note.create({
    data: {
      title: 'note 1',
      body: 'hi hi',
      userId: user.id,
    },
  })

  await prisma.note.create({
    data: {
      title: 'note 2',
      body: 'ho ho',
      userId: user.id,
    },
  })

  console.log(`Database has been seeded. 🌱`)
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
