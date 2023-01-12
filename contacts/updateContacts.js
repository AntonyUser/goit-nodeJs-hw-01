const fs = require("fs/promises");
const contactPath = require("./contactsPath");

const updateContacts = async (contacts) => {
  await fs.writeFile(contactPath, JSON.stringify(contacts));
};

module.exports = updateContacts;
