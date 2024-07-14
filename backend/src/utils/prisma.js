const { PrismaClient } = require('@prisma/client');
//initializing prisma client
const prisma = new PrismaClient();

module.exports = prisma;
