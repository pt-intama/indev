import { Prisma, PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { catchError, from, tap } from 'rxjs';

const prisma = new PrismaClient();
const passwordHash = bcrypt.hashSync('M1r34cl3', bcrypt.genSaltSync());

const userData: Prisma.UserCreateInput = {
  username: 'root',
  email: 'root@example.com',
  isVerified: true,
  role: Role.ADMIN,
  passwordHash,
};

function main() {
  const source = from(
    prisma.user.create({
      data: userData,
    })
  );

  return source;
}

main()
  .pipe(
    catchError((err) => {
      console.log(err);
      process.exit(1);
    })
  )
  .subscribe({
    next: (user) => {
      console.log('==================================');
      console.log('Username: ' + user.username);
      console.log('Password: ' + 'M1r34cl3');
      console.log('==================================');
    },
    complete: () => {
      prisma.$disconnect;
    },
  });
