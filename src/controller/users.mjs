import bcrypt from 'bcrypt';
import { getUser as getUserByEmail, saveUser, getAllUsers } from '../services/users.mjs';


const getUser = async (email) => {
  const result = await getUserByEmail(email);
  return result;
}

const getUsers = async () => {
  const results = await getAllUsers();
  return results;
}

const createUser = async (body) => {
  const existingUser = await getUserByEmail(body.email);

  if(existingUser){
    return res.status(400).send('User already exists!');
  }

  const user = {
    name: body.username,
    surname: body.surname,
    email: body.email,
    passwordHash: bcrypt.hashSync(body.password, 8),
    createDate: Date.now()
  }

  const result = await saveUser(user);

  return result;
}

export {
  getUser,
  getUsers,
  createUser
}
