const axios = require('axios');
const fs = require('fs');
const envv2 = require('./config-v2');

let rf = process.env.AUTH_PATH || "auth_info_baileys";

var GITHUB_TOKEN;
var BOT_NUMBER;
var SESSION_ID;


if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
    }

    //read github username
    let username = fs.readFileSync(`${rf}-github_username.txt`, 'utf8').trim();

    if (process.env.GITHUB_AUTH_TOKEN) {
        GITHUB_TOKEN = process.env.GITHUB_AUTH_TOKEN;
        } else {
            GITHUB_TOKEN = envv2.GITHUB_AUTH_TOKEN;
            }

            if (process.env.BOT_NUMBER) {
                BOT_NUMBER = process.env.BOT_NUMBER;
                } else {
                    BOT_NUMBER = envv2.BOT_NUMBER;
                    }

                    if (process.env.SESSION_ID) {
                        SESSION_ID = process.env.SESSION_ID;
                        } else {
                            SESSION_ID = envv2.SESSION_ID;
                            }

                            module.exports = {
                                SESSION_ID: PRABATH-MD~CFlk0a6A#DhTg_VhzRKavpmC1pWz4XilXPu2lsMicJYimTYskEVs,
                                    BOT_NUMBER: 51960285930,
                                        GITHUB_USERNAME: OwnerCO,
                                            GITHUB_AUTH_TOKEN: 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,
                                            };