const { requiresAuth } = require('express-openid-connect');
const express = require('express');

const app = express();

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
