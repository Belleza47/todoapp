const { Prisma, PrismaClient } = require("@prisma/client");

/** @type {Prisma.UserCreateInput} */
const userData = {
    username: "joey",
    password: "1234",
    todo: {
        create: [
            { task: "Water the Plant" },
            { task: "Buy Sugar"},
        ]
    }
}

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({ data: userData });
}

main();