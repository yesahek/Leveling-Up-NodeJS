const os = require('os');
const fs = require('fs');
const { error } = require('console');
//const { log } = require('console');
const cpuInfo = os.cpus();
//console.log(`Platform ${os.platform()}, Name ${os.hostname()}`);
//console.log(os.cpus().length);

(async () => {
    try {
        const filename = 'cpu.txt';
        if (fs.existsSync('cpu.txt')) {
            const readableStream = fs.createReadStream(filename);
            readableStream.on('data', (chunk) => {
                console.log(chunk.toString());
            });
            readableStream.on('end', () => {
                console.log("stream completed");
            });
            readableStream.on('error', (error) => {
                console.log(error);
            });
        } else {
            fs.promises.writeFile('cpu.txt', JSON.stringify(cpuInfo));
        }
    } catch (error) {
        console.log(error);
    }
})();