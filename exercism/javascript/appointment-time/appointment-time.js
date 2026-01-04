// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = Date.now()) {
  const today = new Date(now);
  const nDaysFromToday = today.setDate(today.getDate() + days);

  return new Date(nDaysFromToday);
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year'
 *                | 'month'
 *                | 'date'
 *                | 'hour'
 *                | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const date = new Date(timestamp);

  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year'
 *                | 'month'
 *                | 'date'
 *                | 'hour'
 *                | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, {
  year,
  month,
  date,
  hour,
  minute,
}) {
  const d = new Date(timestamp);

  year !== undefined && d.setFullYear(year);
  month !== undefined && d.setMonth(month);
  date !== undefined && d.setDate(date);
  hour !== undefined && d.setHours(hour);
  minute !== undefined && d.setMinutes(minute);

  return getAppointmentDetails(d.toISOString());
}

/**
 * Converts milliseconds to seconds
 *
 * @param {number} millis
 * @return {number} The amount of milliseconds converted to seconds
 */
function millisToSeconds(millis) {
  return millis / 1000;
}

const round = Math.round.bind(Math);
const abs = Math.abs.bind(Math);

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const dateAMillis = new Date(timestampA).getTime();
  const dateBMillis = new Date(timestampB).getTime();

  return round(abs(millisToSeconds(dateAMillis - dateBMillis)));
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 * @returns {boolean}
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return new Date(appointmentTimestamp).getTime() > new Date(currentTimestamp).getTime();
}
