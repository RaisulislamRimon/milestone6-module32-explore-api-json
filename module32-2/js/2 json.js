// javascript object notation (json)
// converts from Object to JSON
const personName = { id: 1, name: "Rimon" };
// JSON.stringify(personName);
// console.log(personName);
// console.log(JSON.stringify(personName));
// console.log(personName);
// const stringifiedJson = JSON.stringify(personName);
// console.log(stringifiedJson);

const shop = {
  owner: "Alia",
  address: {
    street: "kochukhet",
    city: "Tashkent",
    country: "Uzbekistan",
  },
  products: ["laptop", "mic", "monitor", "keyboard", "mouse", "speaker"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
console.log(typeof shopJson); // string
const shopObject = JSON.parse(shopJson);
console.log(shopObject);
console.log(typeof shopObject); // object
