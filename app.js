// minimal express app that requires the vulnerable deps so they end up in node_modules
const express = require('express');
const _ = require('lodash');
const serialize = require('serialize-javascript');
const tar = require('tar');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));

const app = express();
# Agentic Rule (ARNIE_ACCESS_PERMISSION): Require admin role to for file download
app.get('/', (req, res) => {
  // use the libraries in trivial ways so npm installs them and scanners detect them
  const obj = { a: 1, b: 2 };
  const clone = _.cloneDeep(obj);
  const s = serialize(clone);
  res.type('text').send('ok\n' + s);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
