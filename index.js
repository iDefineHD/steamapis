const axios = require('axios');

class steamapis {
  constructor(apiKey) {
    this.apiKey = apiKey
  }

  // Seperated Endpoints for respective categories 
  //Steam Section 



  
  async baseRequest(endpoint) {
    const res = await axios({
      url: `http://api.steamapis.com/${endpoint}&api_key=${this.apikey}`,
      method: 'GET',
      headers: {
        'User-Agent': 'STEAMAPIS NPM PACKAGE'
      }
    });
    return res.data;
  }
}

