import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  test('should return health status', async ({ request }) => {
    const response = await request.get('/health');
    expect(response.ok()).toBeTruthy();
    
    const body = await response.json();
    expect(body.status).toBe('healthy');
    expect(body.timestamp).toBeTruthy();
  });

  test('should return welcome message on root', async ({ request }) => {
    const response = await request.get('/');
    expect(response.ok()).toBeTruthy();
    
    const body = await response.json();
    expect(body.message).toBe('Welcome to the Monolith API');
  });

  test('should return users list', async ({ request }) => {
    const response = await request.get('/api/users');
    expect(response.ok()).toBeTruthy();
    
    const users = await response.json();
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);
  });
});
