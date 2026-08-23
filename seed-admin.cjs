const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'hello@gopalahuja.com';
  const plainPassword = 'adminpassword123';
  
  const passwordHash = await bcrypt.hash(plainPassword, 10);
  
  const user = await prisma.user.upsert({
    where: { email },
    update: { passwordHash },
    create: {
      email,
      name: 'Gopal Ahuja',
      passwordHash,
    },
  });

  console.log('Admin user created/updated successfully!');
  console.log('Email:', user.email);
  console.log('Password:', plainPassword);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
