
const ngrok = require('ngrok');
const fs = require('fs');
const API_CONFIG_FILE = `../src/assets/data/api-config.json`;
console.log('start build-mock-api  \n');
ngrok.connect(3006, (err, generatedUrl) => {

    const apiConfigValue = require(API_CONFIG_FILE);
    apiConfigValue.storageApiUrl = generatedUrl;
    apiConfigValue.authApiUrl = generatedUrl;
    apiConfigValue.certificateApiUrl = generatedUrl;
    angularConfigValueString = JSON.stringify(apiConfigValue, null, '\t');
    fs.writeFileSync(API_CONFIG_FILE, angularConfigValueString, 'utf8');
    console.log('end build-mock-api  \n');
    return;
});

