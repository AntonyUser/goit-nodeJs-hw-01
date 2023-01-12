const listContacts = require("./listContacts");
const { v4 } = require("uuid");
const updateContacts = require("./updateContacts");

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { name, email, phone, id: v4() };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

module.exports = addContact;
