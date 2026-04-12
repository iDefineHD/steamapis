# SimpleSteamApis 👋

[![Version](https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> A simple, zero-dependency Node.js wrapper for the [SteamApis.com](http://steamapis.com) API using native `fetch`.

&nbsp;

## 📋 Requirements:

- Node.js **18+**
- A [SteamApis.com](http://steamapis.com) API key

&nbsp;

## 📦 Install:

Use your preferred package manager:

```sh
npm install simplesteamapis
# or: yarn add simplesteamapis | pnpm add simplesteamapis | bun add simplesteamapis
```

&nbsp;

## 🚀 Usage:

```js
const SteamApis = require("simplesteamapis");
const api = new SteamApis("YOUR_API_KEY");

// Fetch a user's CS:GO inventory
const inventory = await api.getInventory("76561198027608071", 730, 2);

// Look up a specific market item
const item = await api.item(730, "AK-47 | Redline (Field-Tested)");

// Get all tracked games
const apps = await api.apps();
```

All methods are `async` and return parsed JSON. Errors throw with `err.message`, `err.status`, and `err.data` (the API's JSON error body) attached.

&nbsp;

## 📖 API Reference:

### **Steam:**

| Method                                          | Description                                                                     |
| ----------------------------------------------- | ------------------------------------------------------------------------------- |
| `getInventory(steamID, appID, contextID)`       | Fetches a user's Steam inventory for a given game and context.                  |
| `getLegacyInventory(steamID, appID, contextID)` | Fetches a user's inventory in legacy format, which includes additional fields.  |
| `getProfile(steamID)`                           | Fetches a user's Steam profile — display name, avatar, visibility, etc.        |

&nbsp;

### **Market:**

| Method                                       | Description                                                                        |
| -------------------------------------------- | ---------------------------------------------------------------------------------- |
| `siteStats()`                                | Platform stats for SteamApis.com — items scanned, requests served, etc.           |
| `app(appID)`                                 | Detailed information for a specific game or application.                           |
| `apps()`                                     | Lists all games and applications currently tracked by SteamApis.com.               |
| `item(appID, market_hash_name)`              | Pricing and metadata for a single item on the Steam Community Market.              |
| `items(appID)`                               | All tracked market items for a given game.                                         |
| `compactItems(appID)`                        | Compact market item list — equivalent to passing `format=compact` to the API.     |
| `CompactItemsWithValue(appID, compact_value)`| Compact market item list with a custom timeframe for price values.                 |
| `cards()`                                    | Trading card data across all games on Steam.                                       |

&nbsp;

### **Images:**

| Method              | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `itemsImage(appID)` | Image URLs for all items within a given game.        |