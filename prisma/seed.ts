import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "@remix.run";
  const password = "racheliscool";

  // cleanup the existing database
  await prisma.user.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });

  // すべてのroleを削除
  await prisma.role.deleteMany({});

  // すべてのUserRoleを削除
  await prisma.userRole.deleteMany({});

  // 権限の登録
  const manager_role = await prisma.role.create({
    data: {
      id: "1",
      roleName: "Manager",
    },
  });

  const admin_role = await prisma.role.create({
    data: {
      id: "2",
      roleName: "Admin",
    },
  });

  const member_role = await prisma.role.create({
    data: {
      id: "99",
      roleName: "Member",
    },
  });

  const hashedPassword = await bcrypt.hash(password, 10);

  // Userの作成
  const manager = await prisma.user.create({
    data: {
      email: `manager${email}`,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  const admin = await prisma.user.create({
    data: {
      email: `admin${email}`,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  const member = await prisma.user.create({
    data: {
      email: `member${email}`,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  // 権限の付与
  await prisma.userRole.create({
    data: {
      id: "1",
      userId: manager.id,
      roleId: manager_role.id,
    },
  });

  await prisma.userRole.create({
    data: {
      id: "2",
      userId: admin.id,
      roleId: admin_role.id,
    },
  });

  await prisma.userRole.create({
    data: {
      id: "3",
      userId: member.id,
      roleId: member_role.id,
    },
  });

  // Note の作成

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: admin.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: admin.id,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
