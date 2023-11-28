const express = require('express');
const { auth } = require('express-openid-connect');

const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: `${process.env.secret}`,
  baseURL: 'https://izzybelhall.github.io/emotional_checkin/',
  clientID: '5R1xHeMddgJ6MpNjqwml0nFk5egOVJYo',
  issuerBaseURL: 'https://dev-5zqz1l5bzwzgsdp2.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

