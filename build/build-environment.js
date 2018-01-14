
const ANGULAR_CONFIG_FILE = '../.angular-cli.json';
const API_CONFIG_FILE = `../src/assets/data/api-config.json`;
const DEFAULT_ENVIRONMENT = 'dev';
const ALLOWED_VALUES = ['', 'dev', 'ci', 'pp', 'prod'];

const package = require('../package.json');
const replace = require('replace-in-file');
const git = require('git-rev');
const _ = require('lodash');
const fs = require('fs');
const angularConfig = require(ANGULAR_CONFIG_FILE);


let targetFileValue = '';
let targetFile = '';
let angularConfigString = '';

const initializeParameter = () => {
    console.log('start initializeParameter');
    //access parameter node 
    if (process.argv && process.argv[2]) {
        targetFileValue  =  process.argv[2] || DEFAULT_ENVIRONMENT; 
    }
    console.log('end initializeParameter \n');
}


const updateConfigurationAssets = () => {
    console.log('start updateConfigurationAssets');

    ALLOWED_VALUES.forEach((itemVal) => {
        if (!itemVal) {
            targetFile = '../src/environments/environment.ts';
        } else {
            targetFile = `../src/environments/environment.${itemVal}.ts`;
        }


        //overwrite targetFileValue enivronment into file
        const options = {
            files: targetFile,
            from: /targetEnvironment: "[A-z0-9]+", /,
            to: `targetEnvironment: "${targetFileValue}",`,
            allowEmptyPaths: false,
        };

        try {
            let changedFiles = replace.sync(options);
            if (changedFiles == 0) {
            }
        } catch (error) {
            console.error('error occurred:', error);
            throw error
        }
 
    });

    //packaging configuration - overwrite asset configuration   
    const newConfig = _.cloneDeep(angularConfig);
    const assetsValue = require(`../configuration/assets/assets-${targetFileValue}.json`);
    newConfig['apps'][0]['assets'] = (assetsValue);
    angularConfigString = JSON.stringify(newConfig, null, '\t');

    fs.writeFileSync(ANGULAR_CONFIG_FILE, angularConfigString, 'utf8');

    console.log('end updateConfigurationAssets \n');
}


const updateConfigurationApi = () => {
    console.log('start updateConfigurationApi');
    //get api file based on target 
    const sourceApiValue = require(`../configuration/api/api-config-${targetFileValue}.json`);
    const newSourceApiValue = _.cloneDeep(sourceApiValue);
    const apiConfigString = JSON.stringify(newSourceApiValue, null, '\t');

    //update api-config json 
    fs.writeFileSync(API_CONFIG_FILE, apiConfigString, 'utf8');

    console.log('\nend updateConfigurationApi  \n');
}


const startBuild = () => {
    try {
        initializeParameter();
        updateConfigurationAssets();
        updateConfigurationApi();

    } catch (error) {
        console.error('Error occurred:', error);
        throw error
    }

}

startBuild();