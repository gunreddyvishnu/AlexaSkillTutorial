const {getRequestType, getIntentName} = require('ask-sdk-core');
const axios = require('axios');

const weatherIntent = {
    canHandle(handlerInput) {
        return getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && getIntentName(handlerInput.requestEnvelope) === 'weather';
    },
    async handle(handlerInput) {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Freiburg,de&APPID=3dd6b81046400c6691f0a95305b924ac&units=metric');

        const temperature = response.data['main']['temp'];

        return handlerInput
            .responseBuilder
            .speak(`Es sind derzeit ${temperature} grad celsius`)
            .getResponse();
    }
}

module.exports = weatherIntent;