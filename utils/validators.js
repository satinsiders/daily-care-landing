const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone) => /^\+?\d{7,15}$/.test(phone);
module.exports = { isValidEmail, isValidPhone };
