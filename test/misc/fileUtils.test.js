import { expect, test } from 'vitest';
import {
  getExtension,
  removeExtension,
  hasExtension,
  normalizeFilename,
} from '../../src/misc/fileUtils.js';

test('gets the extension of a PDF filename', () => {
  expect(getExtension('report.pdf')).toBe('pdf');
});

test('removes the extension from a PDF filename', () => {
  expect(removeExtension('report.pdf')).toBe('report');
});

test('checks whether a filename has an extension', () => {
  expect(hasExtension('report.pdf')).toBe(true);
  expect(hasExtension('README')).toBe(false);
});

test('converts a filename to lowercase', () => {
  expect(normalizeFilename('REPORT.PDF')).toBe('report.pdf');
});

test('removes only the final extension from a filename with multiple dots', () => {
  expect(removeExtension('my.report.final.pdf')).toBe('my.report.final');
});
