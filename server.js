//SDK Integration
const { auth } = require('express-openid-connect');

const express = require('express');
const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'https://izzybelhall.github.io/Emotional_checkin/',
  clientID: 'ey3hd7sV0pLzyq5W28qOHrqTWoVpXnwO',
  issuerBaseURL: 'https://dev-5zqz1l5bzwzgsdp2.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

//User Profile
const { requiresAuth } = require('express-openid-connect');

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});


