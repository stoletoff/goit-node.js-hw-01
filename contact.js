import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

export const contactsPath = path.resolve("db", "contacts.json");

// function rf() {
//   return fs.readFile(contactsPath);
// }


const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (id) => {
  const data = await listContacts();
  const result = data.find((contact) => contact.id === id);
  return result || null;
};

const removeContact = async (id) => {
  const data = await listContacts();
  const indexOfContact = data.findIndex((contact) => contact.id === id);
  if (indexOfContact === -1) {
    return null;
  }
  const [result] = data.splice(indexOfContact, 1);
  return result;
};

const addContact = async ({name, email, phone}) => {
  const data = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  data.push(newContact);
  return newContact;
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
