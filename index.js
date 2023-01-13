const contactsOperation = require("./contacts");
const { program } = require("commander");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactList = await contactsOperation.listContacts();
      console.log(contactList);
      break;

    case "get":
      const contact = await contactsOperation.getById(id);
      if (!contact) {
        throw new Error(`Contact with id ${id} not found`);
      }
      console.log(contact);
      break;

    case "add":
      const newContact = await contactsOperation.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "update":
      const updatedContact = await contactsOperation.updateContactById(
        id,
        name,
        email,
        phone
      );
      if (!updatedContact) {
        throw new Error(`Contact with id ${id} not found`);
      }
      console.log(updatedContact);
      break;

    case "remove":
      const removeContact = await contactsOperation.removeContactById(id);
      if (!removeContact) {
        throw new Error(`Contact with id ${id} not found`);
      }
      console.log(removeContact);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// const arr = hideBin(process.argv);

// const { argv } = yargs(arr);

invokeAction(argv);
