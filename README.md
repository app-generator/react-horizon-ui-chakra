# [React Horizon UI](https://appseed.us/product/horizon-ui/api-server-nodejs/) ⚡️

Designed for those who like modern UI elements and beautiful websites. Made of hundred of elements, designed blocks and fully coded pages, **[React Horizon UI](https://appseed.us/product/horizon-ui/api-server-nodejs/)** is ready to help you create stunning websites and webapps.
The product comes with a simple JWT authentication flow: `login`/`register`/`logout` powered by an open-source **Node JS API** Backend via `Passport` Library.

- 👉 [React Horizon UI](https://appseed.us/product/horizon-ui/api-server-nodejs/) - `product page`
- 👉 [React Horizon UI](https://react-horizon-ui-chakra.appseed-srv1.com/#/auth/sign-in/default) - `LIVE Demo`

![React Horizon UI](https://github.com/app-generator/react-horizon-ui-chakra/assets/51070104/d3270e37-1b35-4409-bdb6-c699fc51fc7d)

<br />

> 🚀 Built with **[React App Generator](https://appseed.us/generator/react/)** 

- ✅ Modern aesthetics UI design - Designed by *[Simmmple](https://simmmple.com/)*
- ✅ Styled with `Chakra Ui`, `Dark-Mode`
- ✅ Authentication: JWT Login/Register/Logout
- ✅ **Full-stack Ready** using a **Node JS API Server** (open-source project) - Server Features
  - `Typescript` / SQLite Persistence / TypeORM / Joy (validation)
  - Passport library - `passport-jwt` strategy.

<br />

## Tests

> `Compatibility matrix` tested with [Render API Wrapper](https://github.com/app-generator/deploy-automation-render).

| NodeJS | NPM | YARN | 
| --- | --- | --- |  
| `v14.0.0` | ✅ | ✅ |
| `v16.0.0` | ✅ | ✅ | 
| `v18.0.0` | ✅ | ✅ | 

<br />

![React Horizon UI - Full-Stack starter provided by AppSeed and Simmmple.](https://user-images.githubusercontent.com/51070104/174428337-181e6dea-0ad9-4fe1-a35f-25e5fa656a9d.png)

<br >

> **Note**: This product can be used with other API Servers for a complete full-stack experience. **ALL API servers use a unified interface**

- [Django API Server](https://github.com/app-generator/api-server-django) - open-source product
- [Flask API Server](https://github.com/app-generator/api-server-flask) - open-source product
- [Node JS API Server](https://github.com/app-generator/api-server-nodejs) - open-source product / Typescript / SQLite / TypeORM / Joy for validation

<br />

## How to use it

To use the product Node JS (>= 12.x) is required and GIT to clone/download the project from the public repository.

**Step 1** - Clone the project

```bash
$ git clone https://github.com/app-generator/react-horizon-ui-chakra.git
$ cd react-horizon-ui-chakra
```

<br >

**Step 2** - Install dependencies via NPM or yarn

```bash
$ npm i
// OR
$ yarn
```

<br />

**Step 3** - Start in development mode

```bash
$ npm run start 
// OR
$ yarn start
```

<br />

## Configure the backend server

The product comes with a usable JWT Authentication flow that provides only the basic requests: login/logout/register. 

**API Server URL** - `src/config/constant.js` 

```javascript
const config = {
    ...
    API_SERVER: 'http://localhost:5000/api/'  // <-- The magic line
};
```

<br />

**API Server Descriptor** - POSTMAN Collection

The API Server signature is provided by the [Unified API Definition](https://docs.appseed.us/boilerplate-code/api-unified-definition)

- [API POSTMAN Collection](https://github.com/app-generator/api-server-unified/blob/main/api.postman_collection.json) - can be used to mock (simulate) the backend server or code a new one in your preferred framework. 

<br />

## Node JS API Server

The product is also open-source and is already configured to work with Berry Dashboard Template - product features:

- Typescript / `NodeJS` / `Express` Server
- JWT authentication (`passport-jwt` strategy)
- Persistence: `SQLite` / `TypeORM`

> Links

- [Node JS API](https://github.com/app-generator/api-server-nodejs) - source code
- [Node JS API](https://appseed.us/boilerplate-code/nodejs-starter) - product page

<br />

![Node JS API - Open-source API server built on top of Express Nodejs Framework.](https://user-images.githubusercontent.com/51070104/124934824-c210a700-e00d-11eb-9d01-e05bd8bfb608.png)

<br />

### Compile the API Server

**Step 1** - Clone the project

```bash
$ git clone https://github.com/app-generator/api-server-nodejs.git
$ cd api-server-nodejs
```

**Step #2** - Install dependencies via NPM or Yarn

```bash
$ npm i
// OR
$ yarn
```

**Step 3** - Run the SQLite migration via TypeORM

```
$ npm run typeorm migration:run
// OR 
$ yarn typeorm migration:run
```

**Step 4** - Start the API server (development mode)

```bash
$ npm run dev
// OR
$ yarn dev
```

The API server will start using the `PORT` specified in `.env` file (default 5000).

<br /> 

## PRO Version

> For more components, pages and priority on support, feel free to take a look at this amazing starter:

Designed for those who like modern UI elements and beautiful websites, Horizon UI is ready to help you create stunning websites and webapps.
This premium design powered by `Chakra UI` comes with many examples for pages like NFTs Pages, Authentication Pages, Profile and so on. 

- 👉 [React Horizon UI PRO](https://appseed.us/product/horizon-ui-pro/full-stack/) - Product Page
  - ✅ `Enhanced UI` - more pages and components
  - ✅ `Priority` on support

<br >

![React Horizon UI PRO - Full-Stack starter provided by AppSeed and Simmmple.](https://user-images.githubusercontent.com/51070104/175255148-7475cb47-0f63-48ee-a39d-7620beca6783.png)

<br />

---
[React Horizon UI](https://appseed.us/product/horizon-ui/api-server-nodejs/) - Provided by Simmmple and **AppSeed [App Generator](https://appseed.us/generator)**.
