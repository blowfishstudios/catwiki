const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const enforce = require("express-sslify");
const kittyData = require("./db/kittyDb.json");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/spinning", (req, res) => {
  res.json({ message: "😻 Welcome, from Kitty-Wiki 😸" });
});

app.get("/api", cors(), (req, res) => {
  const allData = res.json(kittyData);
});

app.get("/api/:name", cors(), (req, res) => {
  // getting selected breed name this way as req.params returns "service-worker.js"
  const url = req.rawHeaders[13];
  const breed = url
    .slice(url.lastIndexOf("/") + 1, url.length)
    .replace(/%20/g, " ");

  console.log(breed);

  // find the data array for a specific breed
  res.json(kittyData[kittyData.findIndex((item) => item.name === breed)]);
});

// if in production then serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// required for Lighthouse PWA test app to be installable.
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.listen(PORT, () => {
  console.log(
    `\n------------------------\n\nServer is running:   http://localhost:${PORT}      👀\n` +
      `\n------------------------\n`
  );
});

/*
* Instead of making multiple additional API calls outside of the app, I decided to grab the data
* and dropped it into a JSON file as I think for the purposes of this exercise this is ok - the Cat API has a bit of lag
* so doing this way will hopefully speed it up.
* Idea would be to set up a monthly refresh or similar using a packange such as cron https://www.npmjs.com/package/cron
* Ran the following in the console whilst located in the Cat API page.

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", process.env.API_KEY);

const formdata = new FormData();

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

fetch("https://api.thecatapi.com/v1/breeds?format=json", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

*/
