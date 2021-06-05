const readline = require('readline');
const fs = require('fs');

function getInput() {
    const input = fs.createReadStream('../input.txt');

    let rl = readline.createInterface({
        input: input,
        output: process.stdout,
        terminal: false
    });

    return new Promise((resolve, reject) => {
        let data = [];
        function handleData(line) {
            data.push(parseInt(line));
        }
        function handleEnd() {
            resolve(data);
        }

        rl.on('line', handleData);
        rl.on('close', handleEnd);
    });
}

module.exports = {getInput}

