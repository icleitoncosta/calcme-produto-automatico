#! /usr/bin/env node
const yargs = require("yargs");
const calcme = require("calcme-js");
const fs = require("fs");
const userData = require("../user.json");
const path = require("path");

const usage = "\nUsage: tran <lang_name> sentence to be translated";
const options = yargs  
      .usage(usage)  
      .positional('user', {
        type: 'string',
        default: '',
        describe: 'Configure o seu login de usuário'
      })
      .positional('pass', {
        type: 'string',
        default: '',
        describe: 'Configure a sua senha de usuário'
      })
      .option("l", {
        alias: 'login',
        describe: "Efetue login para retornar o token de usuário e poder usar as funções"
      })
      .help(true)  
      .argv;

    // Configurando dados de usuário
    if(options.user !== null){  
        userData.login = options.user;
        fs.writeFile(path.join(__dirname, '../user.json'), JSON.stringify(userData, null, 2), (error) => {
            if(error) {
                console.log("Houve um erro na configuração de usuario");
                console.log(error);
            }
        });
        return;
    }
    // Configurando dados de senha
    if(options.pass !== null){  
        userData.password = options.pass;
        fs.writeFile(path.join(__dirname, '../user.json'), JSON.stringify(userData, null, 2), (error) => {
            if(error) {
                console.log("Houve um erro na configuração de senha");
                console.log(error);
            }
        });
        return;
    }
/*
calcme.auth.login({ username: '@gmail.com', password: '' })
.then((data) => {
    console.log(data.data.token);
});
*/