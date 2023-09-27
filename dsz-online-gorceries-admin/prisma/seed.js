const { PrismaClient } = require("@prisma/client");
const { units } = require("./data.js");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.unit.deleteMany();
    await prisma.unit.createMany({
      data: units,
    });
    console.log("Units added.");
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

load();
