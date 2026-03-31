import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NextRequest } from 'next/server';
import { GET, POST, PATCH, DELETE, validateAdmin, ADMIN_KEY, prisma } from './route';

const findManyMock = vi.fn();
const createMock = vi.fn();
const updateMock = vi.fn();
const deleteMock = vi.fn();

describe('contact api route', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.ADMIN_KEY = 'test-admin-key';
    prisma.message = {
      findMany: findManyMock,
      create: createMock,
      update: updateMock,
      delete: deleteMock,
    } as any;
  });

  it('validateAdmin returns true with correct key', () => {
    const req = new NextRequest('http://localhost/api/contact', {
      headers: { 'x-admin-key': 'test-admin-key' },
    });
    expect(validateAdmin(req)).toBe(true);
  });

  it('validateAdmin returns false with missing/incorrect key', () => {
    const req1 = new NextRequest('http://localhost/api/contact');
    expect(validateAdmin(req1)).toBe(false);
    const req2 = new NextRequest('http://localhost/api/contact', {
      headers: { 'x-admin-key': 'wrong' },
    });
    expect(validateAdmin(req2)).toBe(false);
  });

  it('GET returns messages when authorized', async () => {
    findManyMock.mockResolvedValueOnce([
      { id: 1, name: 'A', email: 'a@b.com', message: 'hi', read: false, createdAt: new Date().toISOString() },
    ]);

    const req = new NextRequest('http://localhost/api/contact', {
      headers: { 'x-admin-key': 'test-admin-key' },
    });

    const res = await GET(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ success: true, messages: expect.any(Array) });
    expect(findManyMock).toHaveBeenCalled();
  });

  it('GET returns unauthorized when header missing', async () => {
    const req = new NextRequest('http://localhost/api/contact');
    const res = await GET(req);
    expect(res.status).toBe(401);
    expect(await res.json()).toEqual({ error: 'Unauthorized' });
  });

  it('POST returns 400 for invalid payload', async () => {
    const req = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name: '', email: 'not-an-email', message: '' }),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json).toHaveProperty('error');
  });

  it('POST creates message for valid payload', async () => {
    createMock.mockResolvedValueOnce({ id: 42 });

    const req = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name: 'Joe', email: 'joe@example.com', message: 'Hello' }),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true, id: 42 });
    expect(createMock).toHaveBeenCalled();
  });

  it('PATCH updates read status when authorized', async () => {
    updateMock.mockResolvedValueOnce({ id: 1, read: true });

    const req = new NextRequest('http://localhost/api/contact', {
      method: 'PATCH',
      body: JSON.stringify({ id: 1, read: true }),
      headers: {
        'Content-Type': 'application/json',
        'x-admin-key': 'test-admin-key',
      },
    });

    const res = await PATCH(req);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true, message: { id: 1, read: true } });
    expect(updateMock).toHaveBeenCalled();
  });

  it('DELETE removes message when authorized', async () => {
    deleteMock.mockResolvedValueOnce({});

    const req = new NextRequest('http://localhost/api/contact?id=1', {
      method: 'DELETE',
      headers: { 'x-admin-key': 'test-admin-key' },
    });

    const res = await DELETE(req);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true });
    expect(deleteMock).toHaveBeenCalled();
  });
});
