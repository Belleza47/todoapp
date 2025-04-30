const { Prisma, PrismaClient } = require("@prisma/client");

/** @type {Prisma.UserCreateInput} */
const userData = {
    username: "joey",
    password: "1234",
    todo: {
        create: [
            { task: "Water the Plant" },
            { task: "Buy Sugar"},
            { task: "Buy Salt"},
            { task: "Schedule Appointment"},
            { task: "Review for Exam"},
            { task: "Finish the Project"},
            { task: "Task Modified"},
            { task: "Experimental Code"},
            { task: "Developer B Remote"},
        ]

    }
}

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({ data: userData });
}

main();