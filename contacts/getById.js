const listContacts = require("./listContacts");

const getById = async (id) => {
  const contacts = await listContacts();
  const contact = contacts.find((item) => Number(item.id) === id);
  if (!contact) {
    return null;
  }
  return contact;
};

module.exports = getById;
