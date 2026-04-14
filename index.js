class steamapis {
  constructor(api_key) {
    this.api_key = api_key;
  }

  //Added (Optional Query Parameters) as different routes
  async compactItems(appID) {
    return this.baseRequestWithParameter(
      `market/items/${appID}`,
      `format=compact`,
    );
  }

  async CompactItemsWithValue(appID, compact_value) {
    return this.baseRequestWithParameter(
      `market/items/${appID}`,
      `format=compact&compact_value=${compact_value}`,
    );
  }

  // Seperated Endpoints for respective categories

  //Steam Section

  async getInventory(steamID, appID, contextID) {
    return this.baseRequest(`steam/inventory/${steamID}/${appID}/${contextID}`);
  }

  async getProfile(steamID) {
    return this.baseRequest(`steam/profile/${steamID}`);
  }

  // Market Endpoint

  async siteStats() {
    return this.baseRequest("market/stats");
  }

  async app(appID) {
    return this.baseRequest(`market/app/${appID}`);
  }

  async apps() {
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
  async itemsImage(appID) {
    return this.baseRequest(`image/items/${appID}`);
  }

  //TODO: Add Extended optional requests to the endpoints

  async baseRequest(endpoint) {
    const res = await fetch(
      `http://api.steamapis.com/${endpoint}?api_key=${this.api_key}`,
      {
        method: "GET",
        headers: {
          "User-Agent": "STEAMAPIS NPM PACKAGE",
        },
      },
    );
    if (!res.ok) {
      const body = await res.json().catch(() => null);
      const err = new Error(`Request failed with status ${res.status}`);
      err.status = res.status;
      err.data = body;
      throw err;
    }
    return res.json();
  }

  async baseRequestWithParameter(endpoint, QueryParameter) {
    const res = await fetch(
      `http://api.steamapis.com/${endpoint}?api_key=${this.api_key}&${QueryParameter}`,
      {
        method: "GET",
        headers: {
          "User-Agent": "STEAMAPIS NPM PACKAGE",
        },
      },
    );
    if (!res.ok) {
      const body = await res.json().catch(() => null);
      const err = new Error(`Request failed with status ${res.status}`);
      err.status = res.status;
      err.data = body;
      throw err;
    }
    return res.json();
  }
}

module.exports = steamapis;
