const listContacts = require('./listContacts');


const getContactById = async(id) => {
  const contacts = await listContacts();
  const result = contacts.find(contact => contact.id === id);
    if (!result) {
        throw new Error(`Contacts with ${id} not found`);
    }
    console.log(`Get contact by ID ${id}:`);
    console.table(result);
    return result;
}


module.exports = getContactById;