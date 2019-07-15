const algoliasearch = require('algoliasearch');
const client = algoliasearch('AX46MM40Y3', 'c36280ecf40a8d582b8bf82b220312ad');
const index = client.initIndex('dev_memes');
var memes = require('./memes.json');

for (var key in memes) {
    if (memes.hasOwnProperty(key)) {
        memes[key].relevance = key;
    }
}

index.addObjects(memes, (err, content) => {
    console.log(content);
});