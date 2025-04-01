const fs = require('fs');

/**
 * @typedef User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} password
 */

/**
 * Generates a string of random numeric digits of the specified length.
 *
 * @param {number} length - The number of digits to generate.
 * @returns {string} A string containing random numeric digits.
 */
function generateRandomNumbers(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10); // Generates a random digit (0-9)
  }
  return result;
}

/**
 * Generates a random user object with randomized details.
 *
 * This function generates a user object containing randomized `id`, `name`, `email`, and a predefined `password`.
 * The generated user is used for automated testing or account creation purposes.
 * @function generateRandomUser
 * @returns {User} A user object with random `id`, `name`, `email`, and a constant `password`.
 */
function generateRandomUser() {
  const randString = Math.random().toString(17).substring(2, 17);
  const id = randString;
  const name = `qeMember_${randString}`;
  const email = `qeMember_${randString}@example.com`;
  const password = generateRandomNumbers(18);
  fs.appendFile('userExample.txt', `${id}, ${name}, ${email}, ${password}`, (err) => {
    if (err) throw err;
  })
  return { id, name, email, password };
}

module.exports = {
  generateRandomNumbers,
  generateRandomUser,
}