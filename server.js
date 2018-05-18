/**
 * server.js file representing server startup
 * @author vishnupriya <vishnupriya@cogzidel.com>
 */
var express = require('express');
var bodyParser = require('body-parser');
var Axios = require('axios');
var Request = require('request');
var cors = require('cors');
var OAuth = require('oauth');
// var timestamp = require('unix-timestamp');
var oauthSignature = require('oauth-signature');
var path = require('path');
var serveStatic = require('serve-static');
var app = express();

//set publicpath access from root directory 
app.use(serveStatic(__dirname + "/dist"));

// port address for server startup
var port = process.env.PORT || 5000

// Server starting
app.listen(port);
console.log('starting project at ' + port);

app.post('/auth/:provider', function(req, res){
  switch(req.params.provider) {
    case 'github':
      githubAuth(req, res)
      break
    case 'bitbucket':
      bitbucketAuth(req, res)
      break
  }
});

function githubAuth(req, res) {
  Axios.post('https://github.com/login/oauth/access_token', {
    client_id: config.auth.github.clientId,
    client_secret: config.auth.github.clientSecret,
    code: req.body.code,
    redirect_uri: req.body.redirectUri,
    state: req.body.state,
    grant_type: 'authorization_code'
  }, { 'Content-Type': 'application/json' }).then(function (response) {
    var responseJson = parseQueryString(response.data)
    if (responseJson.error) {
      res.status(500).json({ error: responseJson.error })
    } else {
      res.json(responseJson)
    }
  }).catch(function (err) {
    res.status(500).json(err)
  })
}
function parseQueryString(str) {
  let obj = {};
  let key;
  let value;
  (str || '').split('&').forEach((keyValue) => {
    if (keyValue) {
      value = keyValue.split('=');
      key = decodeURIComponent(value[0]);
      obj[key] = (!!value[1]) ? decodeURIComponent(value[1]) : true;
    }
  });
  return obj;
}