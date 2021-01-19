const steamapis = require("../index");
const api = new steamapis("API_KEY"); // Put api key here

(async () => {
  try {
    const inventory = await api.getInventory("76561198027608071", 730, 2);
    console.log(inventory);
  } catch (err) {
    console.log(err);
  }
})();
