const properties = require('./json/properties.json');
const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  return pool
    .query(
      'SELECT * FROM users WHERE email = $1', [email])
    .then((result) => result.rows.length ? result.rows[0] : null)
    .catch((err) => console.log("uh oh", err.message));
};
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return pool
    .query(
      'SELECT * FROM users WHERE id = $1', [id])
    .then((result) => result.rows.length ? result.rows[0] : null)
    .catch((err) => console.log("uh oh", err.message));
};
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function({ name, email, password }) {
  return pool
    .query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password])
    .then((result) => result.rows.length ? result.rows[0] : null)
    .catch((err) => console.log("uh oh", err.message));
};
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guestId The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guestId, limit = 10) {
  return pool
    .query(
      `SELECT reservations.*, properties.*, AVG(property_reviews.rating) as average_rating
          FROM property_reviews
          JOIN properties ON property_id = properties.owner_id
          JOIN reservations ON reservation_id = reservations.id
          JOIN users ON property_reviews.guest_id = users.id
          WHERE users.id = $1 
          GROUP BY reservations.id, properties.id
          ORDER BY start_date
          LIMIT $2;`, [guestId, limit])
    .then((result) => result.rows)
    .catch((err) => console.log("uh oh", err.message));
};
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {
  return pool
    .query(
      'SELECT * FROM properties LIMIT $1', [limit])
    .then((result) => result.rows)
    .catch((err) => console.log("uh oh", err.message));
};
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
};
exports.addProperty = addProperty;
