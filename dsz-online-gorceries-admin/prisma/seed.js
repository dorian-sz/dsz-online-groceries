const { PrismaClient } = require("@prisma/client");
const { units, offers } = require("./data.js");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.unit.deleteMany();
    await prisma.unit.createMany({
      data: units,
    });
    await prisma.offer.deleteMany();
    await prisma.offer.createMany({
      data: offers,
    });
    console.log("Units added.");
    console.log("Offers added.");
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

load();
