<h1 align="center">Welcome to SimpleSteamApis 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> SteamApis.Com Package for easier use of the API

### 🎉 [Project Home](http://steamapis.com) 

## Install

```sh
yarn add simplesteamapis
```

or

```sh
npm i simplesteamapis
```

## Query Params
<dl>
 <dt> getLegacyInventory(steamID, appID, contextID) </dt>
   <dd> Used to get the legacy version of the users inventory. this includes some information that is not included in the new endpoints data.</dd>
 <dt>compactItems(appID)</dt>
    <dd>Used to gather a compact version of the items from a specific game, provided an appID is provided, for example 730 (CSGO)</dd>
 <dt>CompactItemsWithValue(appID, compact_value)</dt>
    <dd>Used to gather a compact version of the items from a specific game, like above. But with the added feature of allowing a user set timeframe for prices.</dd>
 </dl>
 

 <h2> Steam Specific </h2>
 <dl>
  <dt>getInventory(steamID, appID, contextID)</dt>
     <dd>Used to gather a users inventory from steam. If supplied with a steamID, appID and contextID, this is used in the example below.</dd>
  <dt>getProfile(steamID)</dt>
    <dd>Used to return all information regarding a steam users profile, such as name, avatar etc.</dd>
  </dl>
  

 <h2>Market Specific</h2>
 <dl>
  <dt>siteStats()</dt>
    <dd>Used to return the stats of how many items have been scanned/requests that have been served by steamapis.com</dd>
  <dt>app(appID)</dt>
    <dd>Used to return all information on a specific game/application that has been chosen, 730 (CSGO) for example.</dd>
  <dt>apps()</dt>
    <dd>Used to return all information on all games tracked by steamapis.com.</dd>
  <dt>item(appID, market_hash_name)</dt>
    <dd>Used to return specific information for an item on the community market, provided an appID and Market name are provided.</dd>
  <dt>items(appID)</dt>
    <dd>Used to return all information on items for a specific game, that are on the community market. 730 (CSGO) for example.</dd>
  <dt>cards()</dt>
    <dd>used to return card data for all of steam.</dd>
</dl>


 <h2>Image Specific</h2>
 <dl>
 <dt>itemsImage(appID)</dt>
    <dd>returns images for items from a sepcific game or app, if appID is provided.</dd>
 </dl>   
  
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
