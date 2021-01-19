const axios = require("axios");

class steamapis {
  constructor(api_key) {
    this.api_key = api_key;
  }

  // Seperated Endpoints for respective categories

  //Steam Section

  async getInventory(steamID, appID, contextID) {
    return this.baseRequest(`steam/inventory/${steamID}/${appID}/${contextID}`);
  }

  async getProfile(steamID) {
    return this.baseRequest(`steam/${steamID}`);
  }

  // Market Endpoint

  async siteStats() {
    return this.baseRequest("market/stats");
  }

  async appInfo(appID) {
    return this.baseRequest(`market/app/${appID}`);
  }

  async appsInfo() {
    return this.baseRequest("market/apps");
  }

  async item(appID, market_hash_name) {
    return this.baseRequest(`market/item/${appID}/${market_hash_name}`);
  }

  async items(appID) {
    return this.baseRequest(`market/items/${appID}`);
  }

  async cards() {
    return this.baseRequest("market/items/cards");
  }

  // Images

  async itemImage(appID, market_hash_name) {
    return this.baseRequest(`image/item/${appID}/${market_hash_name}`);
  }

  async itemsImage(appID) {
    return this.baseRequest(`image/items/${appID}`);
  }

  //TODO: Add Extended optional requests to the endpoints

  async baseRequest(endpoint) {
    const res = await axios({
      url: `http://api.steamapis.com/${endpoint}?api_key=${this.api_key}`,
      method: "GET",
      headers: {
        "User-Agent": "STEAMAPIS NPM PACKAGE",
      },
    });
    return res.data;
  }
}

module.exports = steamapis;
