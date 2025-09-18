import { prisma } from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return Response.json(
        { error: 'Invalid email or password' },
        { status: 400 }
      );
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return Response.json(
        { error: 'Invalid email or password' },
        { status: 400 }
      );
    }

    // TODO: setup session/JWT later
    return Response.json({ id: user.id, email: user.email, role: user.role });
  } catch (err) {
    return Response.json({ error: 'Login failed' }, { status: 500 });
  }
}
