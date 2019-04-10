/**
 * When used with `await` it pauses the script and continues it after `time`.
 *
 * @async
 * @function delay
 * @param {number} time Time to pause the execution.
 * @return {Promise<undefined>}
 */
export const delay = async time =>
  new Promise(resolve => setTimeout(resolve, time))

/**
 * Interupts the event loop to handle other events first.
 *
 * @async
 * @function interupt
 * @return {Promise<undefined>}
 */
export const interupt = async () => delay(1)
