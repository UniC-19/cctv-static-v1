'use server';

import { prisma } from '../lib/prisma';

export async function createComplaint(formData: FormData) {
  const customerId = formData.get('customerId')?.toString() as any;
  const title = formData.get('title')?.toString();
  const description = formData.get('description')?.toString();
  const status = formData.get('status')?.toString() as any;

  // ✅ Basic validation
  if (!customerId || !title || !description) {
    return {
      success: false,
      error: '⚠️ Customer ID, Title, and Description are required.',
    };
  }

  try {
    const complaint = await prisma.complaint.create({
      data: {
        customerId: Number(customerId).toString(),
        title,
        description,
        status: status || 'pending',
      },
    });

    return { success: true, complaint };
  } catch (error: any) {
    return { success: false, error: '❌ ' + error.message };
  }
}
