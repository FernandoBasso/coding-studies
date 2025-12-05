const log = console.log.bind(console);

// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return 8 * ratePerHour;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return budget / dayRate(ratePerHour) | 0;
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} hourlyRate
 * @param {number} projectDays: number of days the project spans
 * @param {number} montlyDiscount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(hourlyRate, projectDays, montlyDiscount) {
  const BILLABLE_DAYS_PER_MONT = 22;

  const remainingDays =  projectDays % BILLABLE_DAYS_PER_MONT;
  const fullMonthDays = projectDays - remainingDays;
  const fullMonthsCost = fullMonthDays * dayRate(hourlyRate);
  const fullMonthsCostwithDiscount = fullMonthsCost * (1 - montlyDiscount);
  const remainingDaysCost = remainingDays * dayRate(hourlyRate);

  return Math.ceil(remainingDaysCost + fullMonthsCostwithDiscount);
}
