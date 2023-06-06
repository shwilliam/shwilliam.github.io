import {PrismaClient} from '@prisma/client'

let prisma: PrismaClient

declare global {
  var __db__: PrismaClient | undefined
}

// don't restart server with every change and avoid new db connection with every change
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.__db__) {
    global.__db__ = new PrismaClient()
  }
  prisma = global.__db__
  prisma.$connect()
}

export {prisma}
