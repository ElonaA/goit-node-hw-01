const listContacts = require('./listContacts');
const fs = require("fs/promises");
const path = require('path');
const {v4} = require("uuid");

const contactsPath = path.resolve('./db/contacts.json');

const addContact = async (name, email, phone, error) => {
    if (error) {
        return console.log(error.message);
    }


  const contacts = await listContacts();
  const newContact = {
    name: name,
    email: email,
    phone: phone,
    id: v4()
  };
    fs.writeFile(contactsPath, JSON.stringify([...contacts, newContact]), 'utf8');
    console.log( `Contact ${newContact.name} successfully created`);
    console.table(newContact);
    return newContact;
}


module.exports = addContact;