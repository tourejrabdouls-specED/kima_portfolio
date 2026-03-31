import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validateEmail } from '../../../lib/contact';

// Avoid creating multiple Prisma clients in dev/hot reload.
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export function getAdminKey() {
  return process.env.ADMIN_KEY || 'changeme123';
}

export function validateAdmin(request: NextRequest) {
  const key = request.headers.get('x-admin-key');
  return !!key && key === getAdminKey();
}

function validateContactPayload(payload: Record<string, any>) {
  const { name, email, message } = payload;
  if (!name || !email || !message) {
    return 'All fields are required';
  }
  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return 'Invalid field types';
  }
  if (!validateEmail(email)) {
    return 'Invalid email format';
  }
  if (name.length > 100 || email.length > 255 || message.length > 1000) {
    return 'Field length exceeded';
  }
  return null;
}

export async function GET(request: NextRequest) {
  if (!validateAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ success: true, messages }, { status: 200 });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!validateAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, read } = await request.json();

    if (!id || typeof read !== 'boolean') {
      return NextResponse.json({ error: 'Message id and read status are required' }, { status: 400 });
    }

    const updated = await prisma.message.update({
      where: { id: Number(id) },
      data: { read },
    });

    return NextResponse.json({ success: true, message: updated }, { status: 200 });
  } catch (error) {
    console.error('Error updating message:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!validateAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const idParam = request.nextUrl.searchParams.get('id');
    if (!idParam) {
      return NextResponse.json({ error: 'Message id is required' }, { status: 400 });
    }

    const id = Number(idParam);
    if (Number.isNaN(id) || id <= 0) {
      return NextResponse.json({ error: 'Invalid message id' }, { status: 400 });
    }

    await prisma.message.delete({ where: { id } });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting message:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const validationError = validateContactPayload(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const { name, email, message } = payload;
    const newMessage = await prisma.message.create({ data: { name, email, message } });
    return NextResponse.json({ success: true, id: newMessage.id }, { status: 200 });
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}