import contactServices from "./contact.js";
import yargs from "yargs";
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const listShow = await contactServices.listContacts();
      return console.log(listShow);

    case "getById":
      const contact = await contactServices.getContactById(id);
      return console.log(contact);

    case "deleteById":
      const contactDeleted = await contactServices.removeContact(id);
      return console.log(contactDeleted);

    case "addContact":
      const addNewContact = await contactServices.addContact({
        name,
        email,
        phone,
      });
      return console.log(addNewContact);

    default:
      console.log("Unknown action");
  }
};

const { argv } = yargs(process.argv.slice(2));
console.log(argv);

// invokeAction({
//   action: "addContact",
//   name: "Alexander",
//   email: "alex@gmail.com",
//   phone: "952525225",
// });

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const actionName = process.argv[actionIndex + 1];
// }
// console.log(actionIndex);

// console.log(process.argv);
invokeAction(argv);