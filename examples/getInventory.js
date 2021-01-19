const steamapis = require("../index");
const api = new steamapis("API_KEY");

(async () => {
  try {
    const inventory = await api.CompactItemsWithValue(730, "latest");
    console.log(inventory);
  } catch (err) {
    console.log(err);
  }
})();
