import jwt from 'jsonwebtoken';
import env from 'dotenv';

env.config();

const tokenType = {
  access: process.env.JWT_SECRET,
};

function createToken(payload) {
console.log(payload)
  return jwt.sign(payload, tokenType.access, 
    {
        expiresIn: 3600},
  );
}

export { createToken };