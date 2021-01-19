const steamapis = require("../index");
const api = new steamapis("API_KEY"); // Put api key here

(async () => {
  try {
    const inventory = await api.item(730, "AK-47 | Redline (Field-Tested)");
    console.log(inventory);
  } catch (err) {
    console.log(err);
  }
})();
