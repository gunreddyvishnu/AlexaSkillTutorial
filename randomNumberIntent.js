const {getRequestType, getIntentName} = require('ask-sdk-core');

const randomNumberIntent = {
    canHandle(handlerInput) {
        return getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && getIntentName(handlerInput.requestEnvelope) === 'randomNumber';
    },
    handle(handlerInput) {
        const number = Math.round(Math.random() * 100);

        return handlerInput
            .responseBuilder
            .speak(`Deine zufällige Nummer ist ${number}`)
            .getResponse();
    }
}

module.exports = randomNumberIntent;