import { expect, test } from 'vitest';
import { bytesToKB, bytesToMB } from '../../src/misc/formatUtils.js';

test('converts 1024 bytes to 1 KB', () => {
  expect(bytesToKB(1024)).toBe(1);
});

test('converts 1048576 bytes to 1 MB', () => {
  expect(bytesToMB(1048576)).toBe(1);
});
