const Alexa = require('ask-sdk-core');
const express = require("express");
const {ExpressAdapter} = require("ask-sdk-express-adapter");
const launchRequest = require('./launchRequest');
const randomNumberIntent = require('./randomNumberIntent');
const weatherIntent = require('./weatherIntent');

const skill = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        launchRequest,
        randomNumberIntent,
        weatherIntent,
    )
    .create();

const app = express();

const adapter = new ExpressAdapter(skill, true, true);

app.post('/', adapter.getRequestHandlers());

app.listen(3000);