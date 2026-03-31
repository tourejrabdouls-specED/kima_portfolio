import { describe, expect, it } from 'vitest';
import { validateEmail } from './contact';

describe('validateEmail', () => {
  it('returns true for valid email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  it('returns false for invalid email', () => {
    expect(validateEmail('not-an-email')).toBe(false);
    expect(validateEmail('missing-at-sign.com')).toBe(false);
    expect(validateEmail('no-domain@')).toBe(false);
  });
});
