import { expect, test } from "vitest";
import { addDays } from "../../src/dates/addDateUtils.js";
import { isBefore, isAfter, isSameDay } from "../../src/dates/compareDateUtils.js";

test("adds days across a month boundary", () => {
  expect(addDays(new Date(2026, 0, 31), 1)).toEqual(new Date(2026, 1, 1));
});

test("recognizes an earlier date", () => {
  expect(isBefore(new Date(2026, 0, 1), new Date(2026, 0, 2))).toBe(true);
});

test("recognizes a later date", () => {
  expect(isAfter(new Date(2026, 0, 2), new Date(2026, 0, 1))).toBe(true);
});

test("treats dates a week apart as different calendar days", () => {
  expect(isSameDay(new Date(2026, 0, 1), new Date(2026, 0, 8))).toBe(false);
});
