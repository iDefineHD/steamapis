<h1 align="center">Welcome to SimpleSteamApis 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> SteamApis.Com Package for easier use of the API

### 🏠 [Homepage](steamapis.com)

## Install

```sh
yarn add simplesteamapis
```

or

```sh
npm i simplesteamapis
```

## Usage

Example:

```sh
const steamapis = require("simplesteamapis");
const api = new steamapis("API_KEY");

(async () => {
  try {
    const inventory = await api.getInventory("76561198027608071", 730, 2);
    console.log(inventory);
  } catch (err) {
    console.log(err);
  }
})();
```

## Author

👤 **Ashley Bridges**

- Github: [@idefinehd](https://github.com/idefinehd)

## Show your support

Give a ⭐️ if this project helped you!

---
