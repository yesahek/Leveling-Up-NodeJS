const { chain } = require('stream-chain');
const { parser } = require('stream-json');
const { pick } = require('stream-json/filters/Pick');
const { streamArray } = require('stream-json/streamers/StreamArray');

const fs = require('fs');

const pipeline = chain([
    fs.createReadStream('citylots.json'),
    parser(),
    pick({ filter: 'features' }),
    streamArray(),
]);

pipeline.on('data', (data) => {
    console.log(data);
});