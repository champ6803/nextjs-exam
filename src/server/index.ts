import dotenv from 'dotenv'
import next from 'next'
import path from 'path'
import express from 'express'

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  const index = require("../server/routes/index");
  const storeList = require("../server/routes/store-list");
  server.get("/", storeList.items(app));
  server.get("/banner", storeList.banner(app));
  server.get("/next", index.index(app));

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port);
  console.log(`> Ready on http://localhost:${port}`);
})