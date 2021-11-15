const fs = require("fs/promises");
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');


const listContacts = async () => {
    const data = await fs.readFile(contactsPath, 'utf8');
    const contacts = JSON.parse(data);
    console.log('List of contacts: ');
    console.table(contacts);
    return contacts;
}


module.exports = listContacts;