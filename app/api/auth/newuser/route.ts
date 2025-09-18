import { NextResponse } from 'next/server';

import bcrypt from 'bcryptjs';
import prisma from '@/app/lib/prisma';

export async function POST(req: Request) {
  const { name, email, password, role, mobile } = await req.json();
  const body = await req.json();
  console.log('Incoming body:', body); // ✅ debug
  try {
    const hashed = await bcrypt.hash(password, 10);
    console.log('Incoming body:', body); // ✅ debug
    const user = await prisma.user.create({
      data: {
        name,
        email,
        mobile,
        password: hashed,
        role,
      },
    });

    return NextResponse.json({ success: true, user });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
