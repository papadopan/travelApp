/**
 * action types
 */
export const LOADING_ON = 'LOADING_ON';
export const LOADING_OFF = 'LOADING_OFF';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

/**
 * action functions
 */
export function requestStart() {
  return { type: LOADING_ON };
}
export function requestEnd() {
  return { type: LOADING_OFF };
}
export function logIn() {
  return { type: LOG_IN };
}
export function logOut() {
  return { type: LOG_OUT };
}
