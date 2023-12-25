const jwt = require('jsonwebtoken')

const SECRET = process.env.JWT_SECRET

const setjwt = async (userId) => {
  const payload = {
    id: userId,
  }
  return await jwt.sign(payload, SECRET, { expiresIn: '7d' })
}

const getjwt = async (token) => {
  if (!token) return null

  return await jwt.verify(token, SECRET)
}

module.exports = {
  setjwt,
  getjwt,
}
