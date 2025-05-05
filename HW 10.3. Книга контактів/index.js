const contactBook = {
  contacts: [
    {
      name: "Олена Івашко",
      phone: "+380951234567",
      email: "olena.32@gmail.com"
    },
    {
      name: "Олексій Петренко",
      phone: "+3805011122444",
      email: "petrenko35@gmail.com"
    }
  ],

  findContact(name) {
    return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  },

  addContact(newContact) {
    this.contacts.push(newContact);
  }
};

contactBook.addContact({
  name: "Андрій Симонов",
  phone: "+380679747474",
  email: "simonov44@gmail.com"
});

const result = contactBook.findContact("Андрій Симонов");
console.log(result);
