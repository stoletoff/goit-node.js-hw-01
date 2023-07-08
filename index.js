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

//****************** commander/
import { program } from "commander";

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-ph,--phone <type>");

program.parse(process.argv);

const option = program.opts();
invokeAction(option);

//****************** castom/
// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const actionName = process.argv[actionIndex + 1];
// }
// console.log(actionIndex);

// console.log(process.argv);

//****************** YARGS/

// const { argv } = yargs(process.argv.slice(2));
// console.log(argv);
// invokeAction(argv);

// ActionLists
// 1 ReadingContact
// node index.js -a list

// 2 FindContactByID
// node index.js -a getById -i drsAJ4SHPYqZeG-83QTVW

// 3 DeleteContactByID
// node index.js -a deleteById -i drsAJ4SHPYqZeG-83QTVW

// 4 AddContact
// node index.js -a addContact -n Roga_i_Kopita -e rogaikopita@gmail.com -ph 322-22-22
