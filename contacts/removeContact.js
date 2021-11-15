const listContacts = require("./listContacts");
const fs = require("fs/promises");
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');


const removeContact = async (id) => {
  const contacts = await listContacts();
  const filteredContact = contacts.filter(contact => contact.id !== id);
    if (filteredContact.length === contacts.length) {
        console.log(
            `Contact with ID ${id} don't removed! ID ${id} not found!`,
        );
        return;
    }
    console.log(`Contact with ${id} deleted successfully! New list of contacts: `);
    console.table(filteredContact);
    fs.writeFile(contactsPath, JSON.stringify(filteredContact), 'utf8');
}


module.exports = removeContact;